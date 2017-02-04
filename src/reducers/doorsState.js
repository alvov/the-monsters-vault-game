import { DOOR_STATE_OPEN, DOOR_STATE_OPENING, DOOR_STATE_CLOSE, DOOR_STATE_CLOSING, DOOR_TYPE } from '../constants/constants';
import {
    DOOR_SET_CLOSING,
    DOOR_SET_CLOSE,
    DOOR_SET_OPENING,
    DOOR_SET_OPEN,
    LEVEL_SET
} from '../constants/actionNames';

export default function doorsState(state = {}, action) {
    switch (action.type) {
        case DOOR_SET_CLOSING:
            return {
                ...state,
                [action.id]: DOOR_STATE_CLOSING
            };
        case DOOR_SET_OPENING:
            return {
                ...state,
                [action.id]: DOOR_STATE_OPENING
            };
        case DOOR_SET_CLOSE:
            return {
                ...state,
                [action.id]: DOOR_STATE_CLOSE
            };
        case DOOR_SET_OPEN:
            return {
                ...state,
                [action.id]: DOOR_STATE_OPEN
            };
        case LEVEL_SET:
            return JSON.parse(action.level.objects)
                .filter(obj => obj.type === DOOR_TYPE)
                .reduce((result, obj) => {
                    result[obj.props.id] = obj.props.state;
                    return result;
                }, {});
        default:
            return state;
    }
}
