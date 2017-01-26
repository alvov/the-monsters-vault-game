import {
    GAME_STATE_START,
    GAME_STATE_PLAY,
    GAME_STATE_WIN,
    GAME_STATE_LOOSE
} from '../constants/constants';
import {
    GAME_SET_STATE_START,
    GAME_SET_STATE_PLAY,
    GAME_SET_STATE_WIN,
    GAME_SET_STATE_LOOSE,
    GAME_UPDATE_POINTER_DELTA,
    GAME_RESET_POINTER_DELTA
} from '../constants/actionNames';

export function setGameState(state) {
    switch(state) {
        case GAME_STATE_START:
            return {
                type: GAME_SET_STATE_START
            };
        case GAME_STATE_PLAY:
            return {
                type: GAME_SET_STATE_PLAY
            };
        case GAME_STATE_WIN:
            return {
                type: GAME_SET_STATE_WIN
            };
        case GAME_STATE_LOOSE:
            return {
                type: GAME_SET_STATE_LOOSE
            };
    }
}

export function updatePointerDelta(x, y) {
    return {
        type: GAME_UPDATE_POINTER_DELTA,
        x, y
    }
}

export function resetPointerDelta() {
    return {
        type: GAME_RESET_POINTER_DELTA
    }
}
