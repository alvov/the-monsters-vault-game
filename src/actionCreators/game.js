import {
    START,
    PLAY,
    END
} from '../constants/constants';
import {
    SET_GAME_START,
    SET_GAME_PLAY,
    SET_GAME_END,
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
        case END:
            return {
                type: SET_GAME_END
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
