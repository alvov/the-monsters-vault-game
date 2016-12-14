import {
    PLAYER_RUN,
    PLAYER_WALK,
    PLAYER_STOP
} from '../constants/constants';
import {
    PLAYER_STATE_RUN,
    PLAYER_STATE_WALK,
    PLAYER_STATE_STOP
} from '../constants/actionNames';

export default function playerState(state = PLAYER_STOP, action) {
    switch (action.type) {
        case PLAYER_STATE_STOP:
            return PLAYER_STOP;
        case PLAYER_STATE_WALK:
            return PLAYER_WALK;
        case PLAYER_STATE_RUN:
            return PLAYER_RUN;
        default:
            return state;
    }
}
