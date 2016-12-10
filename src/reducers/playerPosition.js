import level from '../levels/level';

export default function playerPosition(state = level.player.pos, action) {
    switch (action.type) {
        case 'playerPositionUpdate':
            return action.pos;
        default:
            return state;
    }
}
