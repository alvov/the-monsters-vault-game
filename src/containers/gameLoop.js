import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import storeShape from 'react-redux/src/utils/storeShape';

import {
    FPS, KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT, STEP, RUNNING_COEFF, BROAD_CELL_SIZE, SENSITIVITY, HAND_LENGTH,
    DOOR_OPEN, DOOR_CLOSE, DOOR_OPENING, DOOR_CLOSING, DOOR_OPEN_TIME, SWITCHER_TYPE, HINT_SHOW_TIME
} from '../constants/constants';
import {
    HINT_GOAL,
    HINT_WASD,
    HINT_SHIFT,
    HINT_E,
    HINT_FIRST_SWITCHER,
    HINT_DOOR
} from '../constants/hints';
import { getVisibleObjects, getPointPosition, DelayedActions, convertDegreeToRad } from '../lib/utils';

import Loop from '../lib/loop';
import level from '../level';
import Collision from '../lib/collision';
import * as actionCreators from '../actionCreators';

class GameLoop extends React.Component {
    static contextTypes = {
        store: storeShape.isRequired
    };
    static propTypes = {
        onWin: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.delayedActions = new DelayedActions();

        this.loop = new Loop(this.loopCallback.bind(this), FPS);

        this.prevKeysPressed = {};
        this.shownHints = {};
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
        this.delayedActions.clear();
        this.shownHints = {};
    }

    render() {
        return React.Children.only(this.props.children);
    }

    loopCallback(frameRateCoefficient) {
        const actions = this.delayedActions.getActualActions();

        const newState = {};
        const currentStore = this.context.store.getState();

        // show start hint
        actions.push(this.showHints([HINT_GOAL, HINT_WASD, HINT_SHIFT], true));

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
                reducedAngleShift = reducedAngleShift + angleShift[i];
            }
            reducedAngleShift = reducedAngleShift / angleShift.length;

            reducedAngleShift = reducedAngleShift + convertDegreeToRad(currentStore.viewAngle[0]);

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
            const { addVisibleObjects, removeVisibleObjects } = getVisibleObjects(newState.pos, currentStore.objects);
            if (Object.keys(addVisibleObjects).length || Object.keys(removeVisibleObjects).length) {
                actions.push(actionCreators.objects.setVisible({ addVisibleObjects, removeVisibleObjects }));
            }
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
                    actions.push(actionCreators.objects.setReachable({ ...reachableObject }));
                    actions.push(this.showHints([HINT_E], false));
                    actions.push(this.showHints([HINT_FIRST_SWITCHER], true));
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
                const door = currentStore.doorsState[reachableObject.props.id];
                if (![DOOR_OPENING, DOOR_CLOSING].includes(door)) {
                    actions.push(
                        actionCreators.doorsState[door === DOOR_OPEN ? 'setClosing' : 'setOpening'](reachableObject.props.id)
                    );
                    this.delayedActions.pushAction({
                        action: actionCreators.doorsState[door === DOOR_OPEN ? 'setClose' : 'setOpen'](reachableObject.props.id),
                        delay: DOOR_OPEN_TIME
                    });
                    if (door === DOOR_CLOSE) {
                        this.delayedActions.pushAction({
                            action: this.showHints([HINT_DOOR], false, DOOR_OPEN_TIME),
                            delay: DOOR_OPEN_TIME
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

    showHints(hints, once, delay = 0) {
        const rawHints = hints
            .filter(hint => {
                if (once && this.shownHints[hint]) {
                    return false;
                }
                this.shownHints[hint] = true;
                return true;
            });
        if (rawHints.length) {
            this.delayedActions.pushAction({
                action: actionCreators.hints.removeHints(rawHints),
                delay: HINT_SHOW_TIME + delay
            });
        }
        return actionCreators.hints.addHints(rawHints);
    }
}

export default connect()(GameLoop);
