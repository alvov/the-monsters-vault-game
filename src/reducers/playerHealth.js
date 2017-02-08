import { PLAYER_REDUCE_HEALTH, LEVEL_SET } from '../constants/actionNames';

export default function playerHealth(state = 100, action) {
    switch (action.type) {
        case PLAYER_REDUCE_HEALTH:
            return Math.max(0, state - action.value);
        case LEVEL_SET:
            return action.level.player.health;
        default:
            return state;
    }
}
