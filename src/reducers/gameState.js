import {
    GAME_SET_STATE_START,
    GAME_SET_STATE_PLAY,
    GAME_SET_STATE_WIN,
    GAME_SET_STATE_LOOSE
} from '../constants/actionNames';
import { GAME_STATE_LOADING, GAME_STATE_START, GAME_STATE_PLAY, GAME_STATE_WIN, GAME_STATE_LOOSE } from '../constants/constants';

export default function gameState(state = GAME_STATE_LOADING, action) {
    switch (action.type) {
        case GAME_SET_STATE_START:
            return GAME_STATE_START;
        case GAME_SET_STATE_PLAY:
            return GAME_STATE_PLAY;
        case GAME_SET_STATE_WIN:
            return GAME_STATE_WIN;
        case GAME_SET_STATE_LOOSE:
            return GAME_STATE_LOOSE;
        default:
            return state;
    }
}
