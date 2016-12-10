import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import storeShape from 'react-redux/src/utils/storeShape';

import {
    FPS, KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT, STEP, RUNNING_COEFF, BROAD_CELL_SIZE, SENSITIVITY, HAND_LENGTH,
    DOOR_OPEN, DOOR_OPENING, DOOR_CLOSING
} from '../constants';
import Loop from '../lib/loop';
import level from '../levels/level';
import Collision from '../lib/collision';
import Camera from './camera/camera';
import { getVisibleObjects, getPointPosition } from '../lib/utils';

class GameLoop extends React.Component {
    static contextTypes = {
        store: storeShape.isRequired,
        audioCtx: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        this.delayedActions = [];

        this.loop = new Loop(this.loopCallback.bind(this), FPS);

        this.prevKeysPressed = {};
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
        const actions = this.delayedActions.filter(action =>
            action.timestamp <= now
        );
        this.delayedActions = this.delayedActions.filter(action =>
            action.timestamp > now
        );

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
            actions.push({
                type: 'viewAngleUpdate',
                viewAngle: newViewAngle
            });
            actions.push({
                type: 'resetPointerDelta'
            });
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
                actions.push({ type: 'playerStateRun' });
            } else {
                actions.push({ type: 'playerStateWalk' });
            }
        } else {
            actions.push({ type: 'playerStateStop' });
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
                let newAxisPos = currentPos[i] + shift[i];
                // check if got out of bounds
                for (let i = 0; i < 3; i++) {
                    if (level.boundaries[i]) {
                        newAxisPos = Math.min(Math.max(newAxisPos, 0), level.boundaries[i] - 1);
                    }
                }
                newPos.push(newAxisPos);
            }
            const objects = currentStore.objects;
            const collisions = Collision.getCollisions([currentPos, newPos], objects, BROAD_CELL_SIZE);
            // get last collision result as new player position
            const newPosAfterCollisions = collisions[collisions.length - 1].newPos;
            actions.push({
                type: 'playerPositionUpdate',
                pos: newPosAfterCollisions
            });
            newState.pos = newPosAfterCollisions;
        }

        if (newState.pos) {
            // render only visible objects
            const visibleObjects = getVisibleObjects(newState.pos, currentStore.objects);
            const visibleObjectIds = {};
            for (let i = 0; i < visibleObjects.length; i++) {
                const object = visibleObjects[i];
                visibleObjectIds[object.name] = true;
            }
            actions.push({
                type: 'objectsSetVisible',
                visibleObjectIds
            });

            // update audio listener position
            this.context.audioCtx.listener.positionX.value = newState.pos[0];
            this.context.audioCtx.listener.positionY.value = newState.pos[1];
            this.context.audioCtx.listener.positionZ.value = newState.pos[2];
        }

        if (newState.viewAngle) {
            const [forwardX, forwardY, forwardZ] = GameLoop.getVectorFromAngles(...newState.viewAngle);

            let upVerticalAngle;
            let upHorizontalAngle;
            if (newState.viewAngle[1] > 0) {
                upVerticalAngle = 90 - newState.viewAngle[1];
                upHorizontalAngle = newState.viewAngle[0] - 180;
            } else {
                upVerticalAngle = 90 + newState.viewAngle[1];
                upHorizontalAngle = newState.viewAngle[0];
            }
            const [upX, upY, upZ] = GameLoop.getVectorFromAngles(upHorizontalAngle, upVerticalAngle);

            // update audio listener orientation
            this.context.audioCtx.listener.forwardX.value = forwardX;
            this.context.audioCtx.listener.forwardY.value = forwardY;
            this.context.audioCtx.listener.forwardZ.value = forwardZ;
            this.context.audioCtx.listener.upX.value = upX;
            this.context.audioCtx.listener.upY.value = upY;
            this.context.audioCtx.listener.upZ.value = upZ;
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
                    actions.push({
                        type: 'objectsSetReachable',
                        reachableObjectId: reachableObject.name
                    });
                }
            } else {
                actions.push({
                    type: 'objectsSetReachable',
                    reachableObjectId: null
                });
            }
        } else {
            reachableObject = currentStore.objects.find(obj => obj.isReachable);
        }

        // perform interaction if key E is pressed
        if (keyPressed[KEY_E] && !this.prevKeysPressed[KEY_E] && reachableObject) {
            if (reachableObject.type === 'switcher') {
                const door = currentStore.doors[reachableObject.props.id];
                if (![DOOR_OPENING, DOOR_CLOSING].includes(door)) {
                    actions.push({
                        type: door === DOOR_OPEN ? 'doorSetClosing' : 'doorSetOpening',
                        id: reachableObject.props.id
                    });
                    this.delayedActions.push({
                        type: door === DOOR_OPEN ? 'doorSetClosed' : 'doorSetOpened',
                        id: reachableObject.props.id,
                        timestamp: Date.now() + 1000
                    });
                    if (door === DOOR_OPEN) {
                        actions.push({
                            type: 'doorsSetCollidable',
                            isCollidable: true,
                            id: reachableObject.props.id
                        });
                    } else {
                        this.delayedActions.push({
                            type: 'doorsSetCollidable',
                            isCollidable: false,
                            id: reachableObject.props.id,
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
        const y = -Math.sin(GameLoop.convertDegreeToRad(verticalAngle));
        const xzProjectionDist = Math.sqrt(1 - y * y);
        const x = Math.sin(GameLoop.convertDegreeToRad(horizontalAngle)) * xzProjectionDist;
        let z = Math.sqrt(xzProjectionDist * xzProjectionDist - x * x);
        if (Math.abs(horizontalAngle) > 90) {
            z = -z;
        }
        return [x, y, z];
    }
}

export default connect()(GameLoop);
