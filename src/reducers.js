import { SENSITIVITY } from './constants';
import { combineReducers } from 'redux';
import _level from './level/level';

// fix lack of default parameters support in webpack 2
const level = _level;

function viewAngle(state = level.player.angle, action) {
    switch(action.type) {
        case 'updateViewAngle':
            let viewAngle = [
                state[0] - action.pointerDelta.x * SENSITIVITY,
                Math.min(Math.max(state[1] + action.pointerDelta.y * SENSITIVITY, -90), 90),
                0
            ];
            viewAngle[0] %= 360;
            return viewAngle;
        default:
            return state;
    }
}

function position(state = level.player.pos, action) {
    switch(action.type) {
        case 'updatePos':
            let newPos = [];
            for (let i = 0; i < 3; i++) {
                let newAxisPos = state[i] + action.shift[i];
                if (level.boundaries[i]) {
                    newAxisPos = Math.min(Math.max(newAxisPos, 0), level.boundaries[i]);
                }
                newPos.push(newAxisPos);
            }
            const collision = level.getCollision([[state[0], state[2]], [newPos[0], newPos[2]]], level.objects);
            return [collision.newPos[0], newPos[1], collision.newPos[1]];
        default:
            return state;
    }
}

function objects(state = level.objects, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    viewAngle,
    pos: position,
    objects
});
