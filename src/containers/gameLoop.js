import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import storeShape from 'react-redux/src/utils/storeShape';

import { FPS, KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT, STEP, RUNNING_COEFF, BROAD_CELL_SIZE, SENSITIVITY, HAND_LENGTH } from '../constants';
import Controls from '../lib/controls';
import Loop from '../lib/loop';
import level from '../levels/level';
import Collision from '../lib/collision';
import Camera from '../containers/camera';
import { getVisibleObjects, getPointPosition } from '../lib/utils';

class GameLoop extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.controls = new Controls({
            pointerLockerNode: document.getElementById('viewport')
        });
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
        const actions = [];

        const newState = {};

        const pointerDelta = this.controls.getPointerDelta();
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = this.context.store.getState().viewAngle;
            const newViewAngle = [
                (currentViewAngle[0] - pointerDelta.x * SENSITIVITY) % 360,
                Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * SENSITIVITY, -90), 90),
                0
            ];
            actions.push({
                type: 'viewAngleUpdate',
                viewAngle: newViewAngle
            });
            newState.viewAngle = newViewAngle;
        }

        let angleShift = [];
        if (this.controls.keyPressed[KEY_W]) {
            angleShift.push(Math.PI);
        }
        if (this.controls.keyPressed[KEY_S]) {
            angleShift.push(0);
        }
        if (this.controls.keyPressed[KEY_A]) {
            angleShift.push(Math.PI / 2);
        }
        if (this.controls.keyPressed[KEY_D]) {
            // hack for angles sum
            if (this.controls.keyPressed[KEY_W]) {
                angleShift.push(3 * Math.PI / 2);
            } else {
                angleShift.push(-Math.PI / 2);
            }
        }

        if (
            this.controls.keyPressed[KEY_W] ||
            this.controls.keyPressed[KEY_S] ||
            this.controls.keyPressed[KEY_A] ||
            this.controls.keyPressed[KEY_D]
        ) {
            if (this.controls.keyPressed[KEY_SHIFT]) {
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

            // convert to radians and add
            reducedAngleShift += this.context.store.getState().viewAngle[0] * Math.PI / 180;

            let step = frameRateCoefficient * (this.controls.keyPressed[KEY_SHIFT] ? RUNNING_COEFF : 1) * STEP;
            const shift = [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)];
            const currentPos = this.context.store.getState().pos;
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
            const objects = this.context.store.getState().objects;
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
            const visibleObjects = getVisibleObjects(newState.pos, this.context.store.getState().objects);
            const visibleObjectIds = {};
            for (let i = 0; i < visibleObjects.length; i++) {
                const object = visibleObjects[i];
                visibleObjectIds[object.name] = true;
            }
            actions.push({
                type: 'objectsSetVisible',
                visibleObjectIds
            });
        }

        let newReachableObjectId;
        if (newState.pos || newState.viewAngle) {
            const playerPosition = newState.pos || this.context.store.getState().pos;
            const viewAngle = newState.viewAngle || this.context.store.getState().viewAngle;
            const collisionView = Collision.getCollisionView([
                playerPosition,
                getPointPosition({ pos: playerPosition, distance: HAND_LENGTH, angle: viewAngle })
            ], this.context.store.getState().objects, BROAD_CELL_SIZE);
            if (collisionView) {
                newReachableObjectId = collisionView.obj.name;
            }
            actions.push({
                type: 'objectsSetReachable',
                reachableObjectId: newReachableObjectId
            });
        }

        if (this.controls.keyPressed[KEY_E] && !this.prevKeysPressed[KEY_E]) {
            const objects = this.context.store.getState().objects;
            for (let i = 0; i < objects.length; i++) {
                const objectIsReachable = newReachableObjectId ?
                    objects[i].name === newReachableObjectId :
                    objects[i].isReachable;
                if (objectIsReachable) {
                    actions.push({
                        type: 'doorToggle',
                        id: objects[i].props.id
                    });
                    actions.push({
                        type: 'objectsToggleCollidable',
                        id: objects[i].props.id
                    });
                    break;
                }
            }
        }

        if (actions.length) {
            this.props.dispatch(batchActions(actions));
        }

        this.prevKeysPressed = { ...this.controls.keyPressed };
    }
}
GameLoop.contextTypes = {
    store: storeShape.isRequired
};

export default connect()(GameLoop);
