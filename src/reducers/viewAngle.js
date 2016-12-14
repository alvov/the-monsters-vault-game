import level from '../level';
import { VIEW_ANGLE_UPDATE } from '../constants/actionNames';

export default function viewAngle(state = level.player.angle, action) {
    switch (action.type) {
        case VIEW_ANGLE_UPDATE:
            return action.viewAngle;
        default:
            return state;
    }
}
