import {
    START,
    PLAY,
    WIN,
    LOOSE
} from '../constants/constants';
import {
    SET_GAME_START,
    SET_GAME_PLAY,
    SET_GAME_WIN,
    SET_GAME_LOOSE,
    UPDATE_POINTER_DELTA,
    RESET_POINTER_DELTA
} from '../constants/actionNames';

export function setGameState(state) {
    switch(state) {
        case START:
            return {
                type: SET_GAME_START
            };
        case PLAY:
            return {
                type: SET_GAME_PLAY
            };
        case WIN:
            return {
                type: SET_GAME_WIN
            };
        case LOOSE:
            return {
                type: SET_GAME_LOOSE
            };
    }
}

export function updatePointerDelta(x, y) {
    return {
        type: UPDATE_POINTER_DELTA,
        x, y
    }
}

export function resetPointerDelta() {
    return {
        type: RESET_POINTER_DELTA
    }
}
