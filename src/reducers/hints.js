import {
    HINTS_ADD,
    HINTS_REMOVE,
    GAME_SET_STATE_START
} from '../constants/actionNames';

export default function hints(state = new Map(), action) {
    switch (action.type) {
        case HINTS_ADD: {
            if (!action.hints.length) {
                return state;
            }
            const newState = new Map(state);
            action.hints.forEach(hint => {
                const refCount = newState.get(hint) || 0;
                newState.delete(hint);
                newState.set(hint, refCount + 1);
            });
            return newState;
        }
        case HINTS_REMOVE: {
            if (!action.hints.length) {
                return state;
            }
            const newState = new Map(state);
            action.hints.forEach(hint => {
                const refCount = newState.get(hint);
                if (refCount === 1) {
                    newState.delete(hint);
                } else if (refCount) {
                    newState.set(hint, refCount - 1);
                }
            });
            return newState;
        }
        case GAME_SET_STATE_START:
            return new Map();
        default:
            return state;
    }
}
