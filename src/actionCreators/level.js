import { LEVEL_SET } from '../constants/actionNames';

export function setLevel(level) {
    return {
        type: LEVEL_SET,
        level
    }
}
