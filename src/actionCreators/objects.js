import {
    OBJECTS_SET_VISIBLE,
    OBJECTS_SET_REACHABLE
} from '../constants/actionNames';

export function setVisible({ addVisibleObjects, removeVisibleObjects }) {
    return {
        type: OBJECTS_SET_VISIBLE,
        addVisibleObjects,
        removeVisibleObjects
    };
}

export function setReachable(reachableObject) {
    return {
        type: OBJECTS_SET_REACHABLE,
        reachableObject
    };
}
