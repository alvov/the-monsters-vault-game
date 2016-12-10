import level from '../levels/level';

export default function viewAngle(state = level.player.angle, action) {
    switch (action.type) {
        case 'viewAngleUpdate':
            return action.viewAngle;
        default:
            return state;
    }
}
