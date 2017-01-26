import {
    PLAYER_STATE_RUN,
    PLAYER_STATE_WALK,
    PLAYER_STATE_STOP
} from '../constants/constants';
import {
    PLAYER_SET_STATE_RUN,
    PLAYER_SET_STATE_WALK,
    PLAYER_SET_STATE_STOP,
    GAME_SET_STATE_START
} from '../constants/actionNames';

export default function playerState(state = PLAYER_STATE_STOP, action) {
    switch (action.type) {
        case PLAYER_SET_STATE_STOP:
        case GAME_SET_STATE_START:
            return PLAYER_STATE_STOP;
        case PLAYER_SET_STATE_WALK:
            return PLAYER_STATE_WALK;
        case PLAYER_SET_STATE_RUN:
            return PLAYER_STATE_RUN;
        default:
            return state;
    }
}
