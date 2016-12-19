import { DOOR_TYPE } from '../constants/constants';
import {
    OBJECTS_SET_VISIBLE,
    OBJECTS_SET_REACHABLE,
    DOOR_TOGGLE_COLLIDABLE
} from '../constants/actionNames';
import level from '../level';

export default function objects(state = level.objects, action) {
    switch (action.type) {
        case OBJECTS_SET_VISIBLE: {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                const object = state[i];
                const isVisible = object.name in action.visibleObjectIds;
                if (isVisible !== object.isVisible) {
                    objects[i] = { ...object, isVisible }
                } else {
                    objects[i] = object;
                }
            }
            return objects;
        }
        case OBJECTS_SET_REACHABLE: {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                const object = state[i];
                const isReachable = object.name === action.reachableObjectId;
                if (isReachable !== object.isReachable) {
                    objects[i] = { ...object, isReachable };
                } else {
                    objects[i] = object;
                }
            }
            return objects;
        }
        case DOOR_TOGGLE_COLLIDABLE: {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                let object = state[i];
                if (object.type === DOOR_TYPE && object.props.id === action.id) {
                    object.collides = action.on;
                }
                objects[i] = object;
            }
            return objects;
        }
        default:
            return state;
    }
}
