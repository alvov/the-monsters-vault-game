import { KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT } from '../constants/constants';
import { TOGGLE_KEY_PRESSED } from '../constants/actionNames';

export default function keyPressed(state = {
    [KEY_W]: false,
    [KEY_S]: false,
    [KEY_A]: false,
    [KEY_D]: false,
    [KEY_E]: false,
    [KEY_SHIFT]: false
}, action) {
    switch (action.type) {
        case TOGGLE_KEY_PRESSED:
            if (action.keyCode in state) {
                return {
                    ...state,
                    [action.keyCode]: action.on
                }
            }
            return state;
        default:
            return state;
    }
}
