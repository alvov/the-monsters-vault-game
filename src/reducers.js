import { combineReducers } from 'redux';
import level from './levels/level';
import { KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT, DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING } from './constants';

function viewAngle(state = level.player.angle, action) {
    switch (action.type) {
        case 'viewAngleUpdate':
            return action.viewAngle;
        default:
            return state;
    }
}

function playerPosition(state = level.player.pos, action) {
    switch (action.type) {
        case 'playerPositionUpdate':
            return action.pos;
        default:
            return state;
    }
}

function playerState(state = 'stop', action) {
    switch (action.type) {
        case 'playerStateStop':
            return 'stop';
        case 'playerStateWalk':
            return 'walk';
        case 'playerStateRun':
            return 'run';
        default:
            return state;
    }
}

function doors(
    state = level.objects.filter(obj => obj.type === 'door')
        .reduce((result, obj) => {
            result[obj.props.id] = obj.props.state;
            return result;
        }, {}),
    action
) {
    switch (action.type) {
        case 'doorSetClosing':
            return {
                ...state,
                [action.id]: DOOR_CLOSING
            };
        case 'doorSetOpening':
            return {
                ...state,
                [action.id]: DOOR_OPENING
            };
        case 'doorSetClosed':
            return {
                ...state,
                [action.id]: DOOR_CLOSE
            };
        case 'doorSetOpened':
            return {
                ...state,
                [action.id]: DOOR_OPEN
            };
        default:
            return state;
    }
}

function objects(state = level.objects, action) {
    switch (action.type) {
        case 'objectsSetVisible': {
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
        case 'objectsSetReachable': {
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
        case 'doorsSetCollidable': {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                let object = state[i];
                if (object.type === 'door' && object.props.id === action.id) {
                    object.collides = action.isCollidable;
                }
                objects[i] = object;
            }
            return objects;
        }
        default:
            return state;
    }
}

function keyPressed(state = {
    [KEY_W]: false,
    [KEY_S]: false,
    [KEY_A]: false,
    [KEY_D]: false,
    [KEY_E]: false,
    [KEY_SHIFT]: false
}, action) {
    switch (action.type) {
        case 'toggleKeyPressed':
            if (action.keyCode in state) {
                return {
                    ...state,
                    [action.keyCode]: action.on
                }
            }
            return state;
        default:
            return state;
    }
}

function pointerDelta(state = { x: 0, y: 0 }, action) {
    switch (action.type) {
        case 'updatePointerDelta':
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case 'resetPointerDelta':
            return { x: 0, y: 0 };
        default:
            return state;
    }
}

export default combineReducers({
    viewAngle,
    pos: playerPosition,
    playerState,
    doors,
    objects,
    keyPressed,
    pointerDelta
});
