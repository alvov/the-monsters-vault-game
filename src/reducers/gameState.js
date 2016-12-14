import {
    SET_GAME_START,
    SET_GAME_PLAY,
    SET_GAME_END
} from '../constants/actionNames';
import { LOADING, START, PLAY, END } from '../constants/constants';

export default function gameState(state = LOADING, action) {
    switch (action.type) {
        case SET_GAME_START:
            return START;
        case SET_GAME_PLAY:
            return PLAY;
        case SET_GAME_END:
            return END;
        default:
            return state;
    }
}
