import { PLAYER_UPDATE_POSITION, LEVEL_SET } from '../constants/actionNames';

export default function playerPosition(state = [0, 0, 0], action) {
    switch (action.type) {
        case PLAYER_UPDATE_POSITION:
            return action.pos;
        case LEVEL_SET:
            return [...action.level.player.pos];
        default:
            return state;
    }
}
