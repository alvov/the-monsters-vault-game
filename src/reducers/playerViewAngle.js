import { PLAYER_UPDATE_VIEW_ANGLE, LEVEL_SET } from '../constants/actionNames';

export default function playerViewAngle(state = [0, 0, 0], action) {
    switch (action.type) {
        case PLAYER_UPDATE_VIEW_ANGLE:
            return action.viewAngle;
        case LEVEL_SET:
            return [...action.level.player.angle];
        default:
            return state;
    }
}
