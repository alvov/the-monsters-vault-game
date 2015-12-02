var AXIS = ['X', 'Y', 'Z'];

export default {
    toRad(deg) {
        return deg * Math.PI / 180;
    },

    getTransformRule(params) {
        let transform = '';
        if (params.pos) {
            transform += `translate3d(${params.pos.map(coord => coord + 'px').join()})`;
        }
        if (params.angle) {
            transform += params.angle.map((angle, i) => ` rotate${AXIS[i]}(${angle}deg)`).join('');
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
