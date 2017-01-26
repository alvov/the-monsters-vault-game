import {
    SETTINGS_SET_VOLUME,
    SETTINGS_SET_GRAPHICS_QUALITY,
    SETTINGS_SET_MOUSE_SENSITIVITY,
    SETTINGS_SET_STICK_SENSITIVITY
} from '../constants/actionNames';
import { GRAPHICS_QUALITY } from '../constants/constants';

export default function settings(state = {
    soundVolume: 1,
    graphicsQuality: GRAPHICS_QUALITY.NORMAL,
    mouseSensitivity: 0.5,
    stickSensitivity: 2
}, action) {
    switch (action.type) {
        case SETTINGS_SET_VOLUME:
            return {
                ...state,
                soundVolume: action.value
            };
        case SETTINGS_SET_GRAPHICS_QUALITY:
            return {
                ...state,
                graphicsQuality: action.value
            };
        case SETTINGS_SET_MOUSE_SENSITIVITY:
            return {
                ...state,
                mouseSensitivity: action.value
            };
        case SETTINGS_SET_STICK_SENSITIVITY:
            return {
                ...state,
                stickSensitivity: action.value
            };
        default:
            return state;
    }
}
