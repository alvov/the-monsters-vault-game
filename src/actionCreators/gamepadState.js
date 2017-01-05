import { SET_GAMEPAD_STATE } from '../constants/actionNames';

export function setGamepadState(index) {
    return {
        type: SET_GAMEPAD_STATE,
        index
    };
}
