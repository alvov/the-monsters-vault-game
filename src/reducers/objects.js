import level from '../levels/level';

export default function objects(state = level.objects, action) {
    switch (action.type) {
        case 'objectsSetVisible': {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                const object = state[i];
                const isVisible = object.name in action.visibleObjectIds;
                if (isVisible !== object.isVisible) {
                    objects[i] = { ...object, isVisible }
                } else {
                    objects[i] = object;
                }
            }
            return objects;
        }
        case 'objectsSetReachable': {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                const object = state[i];
                const isReachable = object.name === action.reachableObjectId;
                if (isReachable !== object.isReachable) {
                    objects[i] = { ...object, isReachable };
                } else {
                    objects[i] = object;
                }
            }
            return objects;
        }
        case 'doorsSetCollidable': {
            const objects = new Array(state.length);
            for (let i = 0; i < state.length; i++) {
                let object = state[i];
                if (object.type === 'door' && object.props.id === action.id) {
                    object.collides = action.isCollidable;
                }
                objects[i] = object;
            }
            return objects;
        }
        default:
            return state;
    }
}
