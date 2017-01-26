import { GAMEPAD_SET_STATE } from '../constants/actionNames';

export function setGamepadState(index) {
    return {
        type: GAMEPAD_SET_STATE,
        index
    };
}
