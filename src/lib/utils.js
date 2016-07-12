var AXIS = ['X', 'Y', 'Z'];

export default {
    getTransformRule(params) {
        let transform = '';
        if (params.pos) {
            transform += `translate3d(${params.pos[0]}px,${params.pos[1]}px,${params.pos[2]}px)`;
        }
        if (params.angle) {
            for (let axis = 0; axis < params.angle.length; axis++) {
                transform += ` rotate${AXIS[axis]}(${params.angle[axis]}deg)`;
            }
        }
        return { transform };
    }
};
