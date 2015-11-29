import { combineReducers } from 'redux';
import level from 'level/level';

function viewAngle(state = level.player[1], action) {
    switch(action.type) {
        case 'updateViewAngle':
            let viewAngle = [
                state[0] - action.pointerDelta.x,
                Math.min(Math.max(state[1] + action.pointerDelta.y, -90), 90),
                0
            ];
            viewAngle[0] %= 360;
            return viewAngle;
        default:
            return state;
    }
}

function position(state = level.player[0], action) {
    switch(action.type) {
        case 'updatePos':
            return state.map((axisPos, i) => {
                var newAxisPos = axisPos + action.shift[i];
                if (level.boundaries[i]) {
                    newAxisPos = Math.min(Math.max(newAxisPos, level.boundaries[i][0]), level.boundaries[i][1]);
                }
                return newAxisPos;
            });
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
