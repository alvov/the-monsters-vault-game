import {
    DOOR_SET_CLOSING,
    DOOR_SET_CLOSE,
    DOOR_SET_OPENING,
    DOOR_SET_OPEN
} from '../constants/actionNames';

export function setClosing(id) {
    return {
        type: DOOR_SET_CLOSING,
        id
    };
}

export function setOpening(id) {
    return {
        type: DOOR_SET_OPENING,
        id
    };
}

export function setClose(id) {
    return {
        type: DOOR_SET_CLOSE,
        id
    };
}

export function setOpen(id) {
    return {
        type: DOOR_SET_OPEN,
        id
    };
}
