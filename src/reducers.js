import { combineReducers } from 'redux';

var initialState = {
    pos: [0, 0, 0],
    viewAngle: [0, 0, 0]
};

function viewAngle(state = initialState.viewAngle, action) {
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

function position(state = initialState.pos, action) {
    switch(action.type) {
        case 'updatePos':
            return state.map((axisPos, i) => axisPos + action.shift[i]);
        default:
            return state;
    }
}

export default combineReducers({
    viewAngle,
    pos: position
});
