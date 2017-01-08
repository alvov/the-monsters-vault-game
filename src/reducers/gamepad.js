import { SET_GAMEPAD_STATE } from '../constants/actionNames';
import { combineReducers } from 'redux';

function gamepadState(state = -1, action) {
    switch (action.type) {
        case SET_GAMEPAD_STATE:
            return action.index;
        default:
            return state;
    }
}

export default combineReducers({
    state: gamepadState
});
