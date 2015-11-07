var AXIS = ['X', 'Y', 'Z'];

export default {
    toRad(deg) {
        return deg * Math.PI / 180;
    },

    getTransformRule(params) {
        var transform = '';
        if (params.pos) {
            transform += `translate3d(${params.pos.map(coord => coord + 'px').join()})`;
        }
        if (params.angle) {
            transform += params.angle.map((angle, i) => ` rotate${AXIS[i]}(${angle}deg)`).join('');
        }
        return { transform };
    }
};
