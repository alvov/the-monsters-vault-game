import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import storeShape from 'react-redux/src/utils/storeShape';

import {
    FPS, KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT,
    XBOX_BUTTON_X,
    XBOX_STICK_LEFT_AXIS_X, XBOX_STICK_LEFT_AXIS_Y, XBOX_STICK_RIGHT_AXIS_X, XBOX_STICK_RIGHT_AXIS_Y, XBOX_TRIGGER_RIGHT_AXIS,
    CONTROL_STATE,
    PLAYER_SPEED, RUNNING_COEFF, BROAD_CELL_SIZE,
    MOUSE_SENSITIVITY, STICK_SENSITIVITY, STICK_VALUE_THRESHOLD,
    HAND_LENGTH, DOOR_OPEN, DOOR_CLOSE, DOOR_OPENING, DOOR_CLOSING, DOOR_OPEN_TIME, SWITCHER_TYPE, HINT_SHOW_TIME
} from '../constants/constants';

import {
    HINT_GOAL,
    HINT_MOVE_KEYBOARD,
    HINT_RUN_KEYBOARD,
    HINT_INTERACT_KEYBOAD,
    HINT_MOVE_GAMEPAD,
    HINT_RUN_GAMEPAD,
    HINT_INTERACT_GAMEPAD,
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
        store: storeShape.isRequired,
        controls: PropTypes.object.isRequired
    };
    static propTypes = {
        onWin: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.delayedActions = new DelayedActions();

        this.loop = new Loop(this.loopCallback.bind(this), FPS);

        this.shownHints = {};
    }

    componentDidMount() {
        const gamepadIndex = this.context.store.getState().gamepad.state;
        let gamepadSnapshot;
        if (gamepadIndex !== -1) {
            gamepadSnapshot = navigator.getGamepads()[gamepadIndex];
        }
        if (gamepadSnapshot) {
            this.delayedActions.pushAction({
                action: this.showHints([HINT_GOAL, HINT_MOVE_GAMEPAD, HINT_RUN_GAMEPAD], true),
                delay: 0
            });
        } else {
            this.delayedActions.pushAction({
                action: this.showHints([HINT_GOAL, HINT_MOVE_KEYBOARD, HINT_RUN_KEYBOARD], true),
                delay: 0
            });
        }
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

        let gamepadSnapshot;
        if (currentStore.gamepad.state !== -1) {
            gamepadSnapshot = navigator.getGamepads()[currentStore.gamepad.state];
        }

        // get new view angle
        // try gamepad
        if (gamepadSnapshot) {
            const currentViewAngle = currentStore.viewAngle;
            const x = GameLoop.filterStickValue(gamepadSnapshot.axes[XBOX_STICK_RIGHT_AXIS_X]);
            const y = GameLoop.filterStickValue(gamepadSnapshot.axes[XBOX_STICK_RIGHT_AXIS_Y]);
            if (x || y) {
                const newViewAngle = [
                    (currentViewAngle[0] + x * STICK_SENSITIVITY) % 360,
                    Math.min(Math.max(currentViewAngle[1] - y * STICK_SENSITIVITY, -90), 90),
                    0
                ];
                actions.push(actionCreators.player.updateViewAngle(newViewAngle));
                newState.viewAngle = newViewAngle;
            }
        }

        // try mouse
        const pointerDelta = currentStore.pointerDelta;
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = newState.viewAngle || currentStore.viewAngle;
            const newViewAngle = [
                (currentViewAngle[0] - pointerDelta.x * MOUSE_SENSITIVITY) % 360,
                Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * MOUSE_SENSITIVITY, -90), 90),
                0
            ];
            actions.push(actionCreators.player.updateViewAngle(newViewAngle));
            actions.push(actionCreators.game.resetPointerDelta());
            newState.viewAngle = newViewAngle;
        }

        // get player position shift
        let angleShift = [];
        let step = 0;
        let isRunning = false;

        // try gamepad
        if (gamepadSnapshot) {
            const x = GameLoop.filterStickValue(gamepadSnapshot.axes[XBOX_STICK_LEFT_AXIS_X]);
            const z = -GameLoop.filterStickValue(gamepadSnapshot.axes[XBOX_STICK_LEFT_AXIS_Y]) + 0;  // convert -0 to 0 by adding 0
            if (x || z) {
                if (gamepadSnapshot.axes[XBOX_TRIGGER_RIGHT_AXIS] >= 0.5) {
                    isRunning = true;
                }
                step = Math.sqrt(x ** 2 + z ** 2);
                if (z >= 0) {
                    angleShift.push(Math.atan(x / z));
                } else {
                    angleShift.push(Math.atan(x / z) + Math.PI);
                }
            }
        }

        const keyPressed = this.context.controls.keyPressed;
        if (keyPressed[KEY_W][0] !== CONTROL_STATE.UNUSED) {
            angleShift.push(0);
            step = Math.max(step, 1);
        }
        if (keyPressed[KEY_S][0] !== CONTROL_STATE.UNUSED) {
            angleShift.push(Math.PI);
            step = Math.max(step, 1);
        }
        if (keyPressed[KEY_D][0] !== CONTROL_STATE.UNUSED) {
            angleShift.push(Math.PI / 2);
            step = Math.max(step, 1);
        }
        if (keyPressed[KEY_A][0] !== CONTROL_STATE.UNUSED) {
            // hack for angles sum
            if (keyPressed[KEY_W][0] !== CONTROL_STATE.UNUSED) {
                angleShift.push(-Math.PI / 2);
            } else {
                angleShift.push(3 * Math.PI / 2);
            }
            step = Math.max(step, 1);
        }
        if (keyPressed[KEY_SHIFT][0] !== CONTROL_STATE.UNUSED) {
            isRunning = true;
        }

        // get new player state
        if (angleShift.length) {
            if (isRunning) {
                actions.push(actionCreators.player.run());
            } else {
                actions.push(actionCreators.player.walk());
            }
        } else {
            actions.push(actionCreators.player.stop());
        }

        // get new player position
        if (angleShift.length) {
            let angleShiftSum = 0;
            for (let i = 0; i < angleShift.length; i++) {
                angleShiftSum = angleShiftSum + angleShift[i];
            }
            angleShiftSum = angleShiftSum / angleShift.length;

            angleShiftSum = angleShiftSum + convertDegreeToRad(currentStore.viewAngle[0]);

            step = step * frameRateCoefficient * (isRunning ? RUNNING_COEFF : 1) * PLAYER_SPEED;
            const shift = [step * Math.sin(angleShiftSum), 0, -step * Math.cos(angleShiftSum)];
            const newPos = [];
            for (let i = 0; i < 3; i++) {
                newPos.push(currentStore.pos[i] + shift[i]);
            }
            const objects = currentStore.objects;
            const collisions = Collision.getCollisions([currentStore.pos, newPos], objects, BROAD_CELL_SIZE);
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
                    actions.push(this.showHints([
                        gamepadSnapshot ? HINT_INTERACT_GAMEPAD : HINT_INTERACT_KEYBOAD
                    ], false));
                    actions.push(this.showHints([HINT_FIRST_SWITCHER], true));
                }
            } else {
                actions.push(actionCreators.objects.setReachable(null));
            }
        } else {
            reachableObject = currentStore.objects.find(obj => obj.isReachable);
        }

        // perform interaction if key is pressed
        if (
            reachableObject &&
            (
                keyPressed[KEY_E][0] === CONTROL_STATE.FIRST_TIME_DOWN ||
                this.context.controls.gamepadButtons[XBOX_BUTTON_X][0] === CONTROL_STATE.FIRST_TIME_DOWN
            )
        ) {
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

    static filterStickValue(value) {
        return Math.abs(value) >= STICK_VALUE_THRESHOLD ? value : 0;
    }
}

export default connect()(GameLoop);
