import { GAME_UPDATE_POINTER_DELTA, GAME_RESET_POINTER_DELTA, GAME_SET_STATE_START } from '../constants/actionNames';

function getInitialState() {
    return { x: 0, y: 0 };
}

export default function pointerDelta(state = getInitialState(), action) {
    switch (action.type) {
        case GAME_UPDATE_POINTER_DELTA:
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case GAME_RESET_POINTER_DELTA:
            return getInitialState();
        case GAME_SET_STATE_START:
            return getInitialState();
        default:
            return state;
    }
}
