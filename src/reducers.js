import { combineReducers } from 'redux';
import _level from './levels/level';

// fix lack of default parameters support in webpack 2
const level = _level;

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
    state = level.objects.filter(obj => obj.type === 'switcher')
        .reduce((result, obj) => {
            result[obj.props.id] = obj.props.opened;
            return result;
        }, {}),
    action
) {
    switch (action.type) {
        case 'doorToggle':
            return {
                ...state,
                [action.id]: !state[action.id]
            };
        default:
            return state;
    }
}

function objects(state = level.objects, action) {
    switch (action.type) {
        case 'objectsSetVisible': {
            const objects = [];
            for (let i = 0; i < state.length; i++) {
                let object = state[i];
                object.isVisible = object.name in action.visibleObjectIds;
                objects.push(object);
            }
            return objects;
        }
        case 'objectsSetReachable': {
            const objects = [];
            for (let i = 0; i < state.length; i++) {
                let object = state[i];
                object.isReachable = object.name === action.reachableObjectId;
                objects.push(object);
            }
            return objects;
        }
        default:
            return state;
    }
}

export default combineReducers({
    viewAngle,
    pos: playerPosition,
    playerState,
    doors,
    objects
});
