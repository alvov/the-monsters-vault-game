import {
    HINTS_ADD,
    HINTS_REMOVE
} from '../constants/actionNames';

export function addHints(hints) {
    return {
        type: HINTS_ADD,
        hints
    };
}

export function removeHints(hints) {
    return {
        type: HINTS_REMOVE,
        hints
    };
}
