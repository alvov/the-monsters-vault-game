var AXIS = ['X', 'Y', 'Z'];

export function getTransformRule(params) {
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

const spotLightColorsString = (function(colorsCount) {
    const result = [];
    for (let i = 0; i < colorsCount; i++) {
        result.push(`rgba(0, 0, 0, ${(i + 1) / colorsCount}) ${i * 100 / colorsCount}%`);
        result.push(`rgba(0, 0, 0, ${(i + 1) / colorsCount}) ${(i + 1) * 100 / colorsCount}%`);
    }
    return result.join(', ');
})(20);

export function getSpotLightBackground(pos, size) {
    if (size) {
        return `radial-gradient(${size}px at ${pos[0]}px ${pos[1]}px, ${spotLightColorsString})`;
    } else {
        return '';
    }
}
