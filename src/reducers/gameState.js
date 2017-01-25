import {
    SET_GAME_START,
    SET_GAME_PLAY,
    SET_GAME_WIN,
    SET_GAME_LOOSE
} from '../constants/actionNames';
import { LOADING, START, PLAY, WIN, LOOSE } from '../constants/constants';

export default function gameState(state = LOADING, action) {
    switch (action.type) {
        case SET_GAME_START:
            return START;
        case SET_GAME_PLAY:
            return PLAY;
        case SET_GAME_WIN:
            return WIN;
        case SET_GAME_LOOSE:
            return LOOSE;
        default:
            return state;
    }
}
