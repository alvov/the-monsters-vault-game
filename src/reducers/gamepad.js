import { GAMEPAD_SET_STATE } from '../constants/actionNames';
import { combineReducers } from 'redux';

function gamepadState(state = -1, action) {
    switch (action.type) {
        case GAMEPAD_SET_STATE:
            return action.index;
        default:
            return state;
    }
}

export default combineReducers({
    state: gamepadState
});
