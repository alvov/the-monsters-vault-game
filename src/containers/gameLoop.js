import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import storeShape from 'react-redux/src/utils/storeShape';

import {
    FPS, KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT, STEP, RUNNING_COEFF, BROAD_CELL_SIZE, SENSITIVITY, HAND_LENGTH,
    DOOR_OPEN, DOOR_OPENING, DOOR_CLOSING, SWITCHER_TYPE
} from '../constants/constants';

import Loop from '../lib/loop';
import level from '../level';
import Collision from '../lib/collision';
import { getVisibleObjects, getPointPosition } from '../lib/utils';
import * as actionCreators from '../actionCreators';

import Camera from './camera/camera';

class GameLoop extends React.Component {
    static contextTypes = {
        store: storeShape.isRequired,
        audioCtx: PropTypes.object.isRequired
    };
    static propTypes = {
        onWin: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.delayedActions = [];

        this.loop = new Loop(this.loopCallback.bind(this), FPS);

        this.prevKeysPressed = {};

        const currentStore = this.context.store.getState();
        this.updateListenerPosition(currentStore.pos);
        this.updateListenerOrientation(currentStore.viewAngle);
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
    }

    render() {
        return <Camera />
    }

    loopCallback(frameRateCoefficient) {
        const now = Date.now();
        const actions = this.delayedActions
            .filter(entity => entity.timestamp <= now)
            .map(entity => entity.action);
        this.delayedActions = this.delayedActions.filter(entity => entity.timestamp > now);

        const newState = {};
        const currentStore = this.context.store.getState();

        const pointerDelta = currentStore.pointerDelta;
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = currentStore.viewAngle;
            const newViewAngle = [
                (currentViewAngle[0] - pointerDelta.x * SENSITIVITY) % 360,
                Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * SENSITIVITY, -90), 90),
                0
            ];
            actions.push(actionCreators.player.updateViewAngle(newViewAngle));
            actions.push(actionCreators.game.resetPointerDelta());
            newState.viewAngle = newViewAngle;
        }

        let angleShift = [];
        const keyPressed = currentStore.keyPressed;
        if (keyPressed[KEY_W]) {
            angleShift.push(Math.PI);
        }
        if (keyPressed[KEY_S]) {
            angleShift.push(0);
        }
        if (keyPressed[KEY_A]) {
            angleShift.push(Math.PI / 2);
        }
        if (keyPressed[KEY_D]) {
            // hack for angles sum
            if (keyPressed[KEY_W]) {
                angleShift.push(3 * Math.PI / 2);
            } else {
                angleShift.push(-Math.PI / 2);
            }
        }

        if (
            keyPressed[KEY_W] ||
            keyPressed[KEY_S] ||
            keyPressed[KEY_A] ||
            keyPressed[KEY_D]
        ) {
            if (keyPressed[KEY_SHIFT]) {
                actions.push(actionCreators.player.run());
            } else {
                actions.push(actionCreators.player.walk());
            }
        } else {
            actions.push(actionCreators.player.stop());
        }

        if (angleShift.length) {
            let reducedAngleShift = 0;
            for (let i = 0; i < angleShift.length; i++) {
                reducedAngleShift += angleShift[i];
            }
            reducedAngleShift /= angleShift.length;

            reducedAngleShift += GameLoop.convertDegreeToRad(currentStore.viewAngle[0]);

            let step = frameRateCoefficient * (keyPressed[KEY_SHIFT] ? RUNNING_COEFF : 1) * STEP;
            const shift = [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)];
            const currentPos = currentStore.pos;
            const newPos = [];
            for (let i = 0; i < 3; i++) {
                newPos.push(currentPos[i] + shift[i]);
            }
            const objects = currentStore.objects;
            const collisions = Collision.getCollisions([currentPos, newPos], objects, BROAD_CELL_SIZE);
            // get last collision result as new player position
            const newPosAfterCollisions = collisions[collisions.length - 1].newPos;
            actions.push(actionCreators.player.updatePosition(newPosAfterCollisions));
            newState.pos = newPosAfterCollisions;
        }

        if (newState.pos) {
            // if out of bounds - win
            for (let i = 0; i < 3; i++) {
                if (level.boundaries[i]) {
                    if (newState.pos[i] < 0 || newState.pos[i] > level.boundaries[i]) {
                        this.props.onWin();
                        return;
                    }
                }
            }

            // render only visible objects
            const visibleObjects = getVisibleObjects(newState.pos, currentStore.objects);
            const visibleObjectIds = {};
            for (let i = 0; i < visibleObjects.length; i++) {
                const object = visibleObjects[i];
                visibleObjectIds[object.name] = true;
            }
            actions.push(actionCreators.objects.setVisible(visibleObjectIds));

            this.updateListenerPosition(newState.pos);
        }

        if (newState.viewAngle) {
            this.updateListenerOrientation(newState.viewAngle);
        }

        // find interactive object which we can reach with a hand
        let reachableObject;
        if (newState.pos || newState.viewAngle) {
            const playerPosition = newState.pos || currentStore.pos;
            const viewAngle = newState.viewAngle || currentStore.viewAngle;
            const collisionView = Collision.getCollisionView([
                playerPosition,
                getPointPosition({ pos: playerPosition, distance: HAND_LENGTH, angle: viewAngle })
            ], currentStore.objects, BROAD_CELL_SIZE);
            if (collisionView && collisionView.obj.isInteractive) {
                reachableObject = collisionView.obj;
                if (!reachableObject.isReachable) {
                    actions.push(actionCreators.objects.setReachable(reachableObject.name));
                }
            } else {
                actions.push(actionCreators.objects.setReachable(null));
            }
        } else {
            reachableObject = currentStore.objects.find(obj => obj.isReachable);
        }

        // perform interaction if key E is pressed
        if (keyPressed[KEY_E] && !this.prevKeysPressed[KEY_E] && reachableObject) {
            if (reachableObject.type === SWITCHER_TYPE) {
                const door = currentStore.doors[reachableObject.props.id];
                if (![DOOR_OPENING, DOOR_CLOSING].includes(door)) {
                    actions.push(
                        actionCreators.doors[door === DOOR_OPEN ? 'setClosing' : 'setOpening'](reachableObject.props.id)
                    );
                    this.delayedActions.push({
                        action: actionCreators.doors[door === DOOR_OPEN ? 'setClose' : 'setOpen']({
                            id: reachableObject.props.id
                        }),
                        timestamp: Date.now() + 1000
                    });
                    if (door === DOOR_OPEN) {
                        actions.push(actionCreators.doors.toggleCollidable({
                            on: true,
                            id: reachableObject.props.id
                        }));
                    } else {
                        this.delayedActions.push({
                            action: actionCreators.doors.toggleCollidable({
                                on: false,
                                id: reachableObject.props.id
                            }),
                            timestamp: Date.now() + 1000
                        });
                    }
                }
            }
        }

        if (actions.length) {
            this.props.dispatch(batchActions(actions));
        }

        this.prevKeysPressed = { ...keyPressed };
    }

    /**
     * Updates audio listener position values
     * @param {Array} pos
     */
    updateListenerPosition(pos) {
        this.context.audioCtx.listener.positionX.value = pos[0];
        this.context.audioCtx.listener.positionY.value = pos[1];
        this.context.audioCtx.listener.positionZ.value = pos[2];
    }

    /**
     * Updates audio listener orientation values
     * @param {Array} angle
     */
    updateListenerOrientation(angle) {
        const [forwardX, forwardY, forwardZ] = GameLoop.getVectorFromAngles(...angle);

        let upVerticalAngle;
        let upHorizontalAngle;
        if (angle[1] > 0) {
            upVerticalAngle = 90 - angle[1];
            upHorizontalAngle = (angle[0] - 180) % 360;
        } else {
            upVerticalAngle = 90 + angle[1];
            upHorizontalAngle = angle[0];
        }
        const [upX, upY, upZ] = GameLoop.getVectorFromAngles(upHorizontalAngle, upVerticalAngle);

        this.context.audioCtx.listener.forwardX.value = forwardX;
        this.context.audioCtx.listener.forwardY.value = forwardY;
        this.context.audioCtx.listener.forwardZ.value = forwardZ;
        this.context.audioCtx.listener.upX.value = upX;
        this.context.audioCtx.listener.upY.value = upY;
        this.context.audioCtx.listener.upZ.value = upZ;
    }

    /**
     * Returns radians for given degrees
     * @param {number} angle
     * @returns {number}
     */
    static convertDegreeToRad(angle) {
        return angle / 180 * Math.PI;
    }

    /**
     * Returns vector coordinates for given angles
     * @param {number} horizontalAngle (rad)
     * @param {number} verticalAngle (rad)
     * @returns {number[]}
     */
    static getVectorFromAngles(horizontalAngle, verticalAngle) {
        const y = Math.sin(GameLoop.convertDegreeToRad(verticalAngle));
        const xzProjectionDist = Math.sqrt(1 - y * y);
        const x = Math.sin(GameLoop.convertDegreeToRad(horizontalAngle)) * xzProjectionDist;
        let z = Math.sqrt(xzProjectionDist * xzProjectionDist - x * x);
        if (Math.abs(horizontalAngle) < 90 || Math.abs(horizontalAngle) > 270) {
            z = -z;
        }
        return [x, y, z];
    }
}

export default connect()(GameLoop);
