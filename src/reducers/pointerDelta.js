import { UPDATE_POINTER_DELTA, RESET_POINTER_DELTA, SET_GAME_START } from '../constants/actionNames';

function getInitialState() {
    return { x: 0, y: 0 };
}

export default function pointerDelta(state = getInitialState(), action) {
    switch (action.type) {
        case UPDATE_POINTER_DELTA:
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case RESET_POINTER_DELTA:
            return getInitialState();
        case SET_GAME_START:
            return getInitialState();
        default:
            return state;
    }
}
