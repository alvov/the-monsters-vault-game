import level from '../level'
import { DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING } from '../constants';

export default function doors(
    state = level.objects.filter(obj => obj.type === 'door')
        .reduce((result, obj) => {
            result[obj.props.id] = obj.props.state;
            return result;
        }, {}),
    action
) {
    switch (action.type) {
        case 'doorSetClosing':
            return {
                ...state,
                [action.id]: DOOR_CLOSING
            };
        case 'doorSetOpening':
            return {
                ...state,
                [action.id]: DOOR_OPENING
            };
        case 'doorSetClosed':
            return {
                ...state,
                [action.id]: DOOR_CLOSE
            };
        case 'doorSetOpened':
            return {
                ...state,
                [action.id]: DOOR_OPEN
            };
        default:
            return state;
    }
}
