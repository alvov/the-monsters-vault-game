import {
    SET_SETTINGS_VOLUME,
    SET_SETTINGS_MOUSE_SENSITIVITY,
    SET_SETTINGS_STICK_SENSITIVITY
} from '../constants/actionNames';

export function setVolume(value) {
    return {
        type: SET_SETTINGS_VOLUME,
        value
    };
}

export function setMouseSensitivity(value) {
    return {
        type: SET_SETTINGS_MOUSE_SENSITIVITY,
        value
    };
}

export function setStickSensitivity(value) {
    return {
        type: SET_SETTINGS_STICK_SENSITIVITY,
        value
    };
}
