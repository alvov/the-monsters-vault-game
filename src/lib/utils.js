var AXIS = ['X', 'Y', 'Z'];

export default {
    toRad(deg) {
        return deg * Math.PI / 180;
    },

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
    },

    vectorsAdd(v1, v2) {
        const result = [];
        for (let axis = 0; axis < v1.length; axis++) {
            result.push(v1[axis] + v2[axis]);
        }
        return result;
    }
};
