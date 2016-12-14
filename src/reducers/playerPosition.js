import { PLAYER_POSITION_UPDATE } from '../constants/actionNames';
import level from '../level';

export default function playerPosition(state = level.player.pos, action) {
    switch (action.type) {
        case PLAYER_POSITION_UPDATE:
            return action.pos;
        default:
            return state;
    }
}
