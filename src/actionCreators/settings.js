import {
    SETTINGS_SET_VOLUME,
    SETTINGS_SET_GRAPHICS_QUALITY,
    SETTINGS_SET_MOUSE_SENSITIVITY,
    SETTINGS_SET_STICK_SENSITIVITY
} from '../constants/actionNames';

export function setVolume(value) {
    return {
        type: SETTINGS_SET_VOLUME,
        value
    };
}

export function setGraphicsQuality(value) {
    return {
        type: SETTINGS_SET_GRAPHICS_QUALITY,
        value
    };
}

export function setMouseSensitivity(value) {
    return {
        type: SETTINGS_SET_MOUSE_SENSITIVITY,
        value
    };
}

export function setStickSensitivity(value) {
    return {
        type: SETTINGS_SET_STICK_SENSITIVITY,
        value
    };
}
