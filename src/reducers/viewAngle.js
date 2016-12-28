import level from '../level';
import { VIEW_ANGLE_UPDATE, SET_GAME_START } from '../constants/actionNames';

function getInitialState() {
    return [...level.player.angle];
}

export default function viewAngle(state = getInitialState(), action) {
    switch (action.type) {
        case VIEW_ANGLE_UPDATE:
            return action.viewAngle;
        case SET_GAME_START:
            return getInitialState();
        default:
            return state;
    }
}
