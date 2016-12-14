import { UPDATE_POINTER_DELTA, RESET_POINTER_DELTA } from '../constants/actionNames';

export default function pointerDelta(state = { x: 0, y: 0 }, action) {
    switch (action.type) {
        case UPDATE_POINTER_DELTA:
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case RESET_POINTER_DELTA:
            return { x: 0, y: 0 };
        default:
            return state;
    }
}
