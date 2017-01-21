import { DOOR_TYPE, BOX_TYPE } from '../constants/constants';
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

export default function objects(state = getInitialState(), action) {
    switch (action.type) {
        case OBJECTS_SET_VISIBLE: {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                const object = state[i];
                if (object.name in action.addVisibleObjects) {
                    objects[i] = { ...object, isVisible: true };
                } else if (object.name in action.removeVisibleObjects) {
                    objects[i] = { ...object, isVisible: false };
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
            const newState = setDoorCollidable({ state, id: action.id, on: false });
            const objects = new Array(newState.length);
            for (let i = 0; i < newState.length; i++) {
                let object = newState[i];
                if (object.type === BOX_TYPE && object.props.dependsOnDoor === action.id) {
                    object.collides = false;
                    object.isBroken = true;
                }
                objects[i] = object;
            }
            return objects;
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
