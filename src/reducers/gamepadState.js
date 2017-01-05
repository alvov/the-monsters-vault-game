import { SET_GAMEPAD_STATE } from '../constants/actionNames';

export default function gamepadState(state = -1, action) {
    switch (action.type) {
        case SET_GAMEPAD_STATE:
            return action.index;
        default:
            return state;
    }
}
