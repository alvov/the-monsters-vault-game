import {
    SET_SETTINGS_VOLUME,
    SET_SETTINGS_GRAPHICS_QUALITY,
    SET_SETTINGS_MOUSE_SENSITIVITY,
    SET_SETTINGS_STICK_SENSITIVITY
} from '../constants/actionNames';
import { GRAPHICS_QUALITY } from '../constants/constants';

export default function settings(state = {
    soundVolume: 1,
    graphicsQuality: GRAPHICS_QUALITY.NORMAL,
    mouseSensitivity: 0.5,
    stickSensitivity: 2
}, action) {
    switch (action.type) {
        case SET_SETTINGS_VOLUME:
            return {
                ...state,
                soundVolume: action.value
            };
        case SET_SETTINGS_GRAPHICS_QUALITY:
            return {
                ...state,
                graphicsQuality: action.value
            };
        case SET_SETTINGS_MOUSE_SENSITIVITY:
            return {
                ...state,
                mouseSensitivity: action.value
            };
        case SET_SETTINGS_STICK_SENSITIVITY:
            return {
                ...state,
                stickSensitivity: action.value
            };
        default:
            return state;
    }
}
