import { PLAYER_UPDATE_POSITION, GAME_SET_STATE_START } from '../constants/actionNames';
import level from '../level';

function getInitialState() {
    return [...level.player.pos];
}

export default function playerPosition(state = getInitialState(), action) {
    switch (action.type) {
        case PLAYER_UPDATE_POSITION:
            return action.pos;
        case GAME_SET_STATE_START:
            return getInitialState();
        default:
            return state;
    }
}
