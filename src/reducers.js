import { SENSITIVITY } from './constants';
import { combineReducers } from 'redux';
import _level from './levels/level';

// fix lack of default parameters support in webpack 2
const level = _level;

function viewAngle(state = level.player.angle, action) {
    switch (action.type) {
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

function playerPosition(state = level.player.pos, action) {
    switch (action.type) {
        case 'updatePlayerPos':
            let newPos = [];
            for (let i = 0; i < 3; i++) {
                let newAxisPos = state[i] + action.shift[i];
                // check if got out of bounds
                for (let i = 0; i < 3; i++) {
                    if (level.boundaries[i]) {
                        newAxisPos = Math.min(Math.max(newAxisPos, 0), level.boundaries[i] - 1);
                    }
                }
                newPos.push(newAxisPos);
            }
            const collisions = level.collision.getCollisions([[state[0], state[2]], [newPos[0], newPos[2]]]);
            // get last collision result as new player position
            const collisionReboundPos = collisions[collisions.length - 1].newPos;
            return [collisionReboundPos[0], newPos[1], collisionReboundPos[1]];
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

function objects(state = level.objects, action) {
    return state;
}

export default combineReducers({
    viewAngle,
    pos: playerPosition,
    playerState,
    objects
});
