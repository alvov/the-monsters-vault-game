import { DOOR_TYPE } from '../constants/constants';
import {
    OBJECTS_SET_VISIBLE,
    OBJECTS_SET_REACHABLE,
    DOOR_SET_OPEN,
    DOOR_SET_CLOSE,
    SET_GAME_START
} from '../constants/actionNames';
import level from '../level';

function getInitialState() {
    return JSON.parse(level.objects);
}

function setDoorCollidable({ state, id, on }) {
    const objects = new Array(state.length);
    for (let i = 0; i < state.length; i++) {
        let object = state[i];
        if (object.type === DOOR_TYPE && object.props.id === id) {
            object.collides = on;
        }
        objects[i] = object;
    }
    return objects;
}

export default function objects(state = {}, action) {
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
                let isReachable;
                if (action.reachableObject && object.name === action.reachableObject.name) {
                    isReachable = true;
                }
                if (isReachable !== object.isReachable) {
                    objects[i] = { ...object, isReachable };
                } else {
                    objects[i] = object;
                }
            }
            return objects;
        }
        case DOOR_SET_OPEN: {
            return setDoorCollidable({ state, id: action.id, on: false });
        }
        case DOOR_SET_CLOSE: {
            return setDoorCollidable({ state, id: action.id, on: true });
        }
        case SET_GAME_START: {
            return getInitialState();
        }
        default:
            return state;
    }
}
