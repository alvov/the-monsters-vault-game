import {
    OBJECTS_SET_VISIBLE,
    OBJECTS_SET_REACHABLE
} from '../constants/actionNames';

export function setVisible(visibleObjectIds) {
    return {
        type: OBJECTS_SET_VISIBLE,
        visibleObjectIds
    };
}

export function setReachable(reachableObjectId) {
    return {
        type: OBJECTS_SET_REACHABLE,
        reachableObjectId
    };
}
