import level from '../level'
import { DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING, DOOR_TYPE } from '../constants/constants';
import {
    DOOR_SET_CLOSING,
    DOOR_SET_CLOSE,
    DOOR_SET_OPENING,
    DOOR_SET_OPEN,
    SET_GAME_START
} from '../constants/actionNames';

function getInitialState() {
    return JSON.parse(level.objects)
        .filter(obj => obj.type === DOOR_TYPE)
        .reduce((result, obj) => {
            result[obj.props.id] = obj.props.state;
            return result;
        }, {})
}

export default function doorsState(state = {}, action) {
    switch (action.type) {
        case DOOR_SET_CLOSING:
            return {
                ...state,
                [action.id]: DOOR_CLOSING
            };
        case DOOR_SET_OPENING:
            return {
                ...state,
                [action.id]: DOOR_OPENING
            };
        case DOOR_SET_CLOSE:
            return {
                ...state,
                [action.id]: DOOR_CLOSE
            };
        case DOOR_SET_OPEN:
            return {
                ...state,
                [action.id]: DOOR_OPEN
            };
        case SET_GAME_START:
            return getInitialState();
        default:
            return state;
    }
}
