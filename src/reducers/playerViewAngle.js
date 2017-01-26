import level from '../level';
import { PLAYER_UPDATE_VIEW_ANGLE, GAME_SET_STATE_START } from '../constants/actionNames';

function getInitialState() {
    return [...level.player.angle];
}

export default function playerViewAngle(state = getInitialState(), action) {
    switch (action.type) {
        case PLAYER_UPDATE_VIEW_ANGLE:
            return action.viewAngle;
        case GAME_SET_STATE_START:
            return getInitialState();
        default:
            return state;
    }
}
