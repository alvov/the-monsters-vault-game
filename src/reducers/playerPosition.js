import { PLAYER_POSITION_UPDATE, SET_GAME_START } from '../constants/actionNames';
import level from '../level';

function getInitialState() {
    return [...level.player.pos];
}

export default function playerPosition(state = getInitialState(), action) {
    switch (action.type) {
        case PLAYER_POSITION_UPDATE:
            return action.pos;
        case SET_GAME_START:
            return getInitialState();
        default:
            return state;
    }
}
