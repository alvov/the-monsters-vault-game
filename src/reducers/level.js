import { LEVEL_SET } from '../constants/actionNames';

export default function level(state = {}, action) {
    switch (action.type) {
        case LEVEL_SET:
            return action.level;
        default:
            return state;
    }
}
