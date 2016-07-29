const AXIS = ['X', 'Y', 'Z'];

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

const MAX_COLORS_COUNT = 20;
function getSpotLightColorsString(minOpacity = 0, colorsCount = MAX_COLORS_COUNT) {
    const result = [];
    for (let i = 0; i < colorsCount; i++) {
        const opacity = minOpacity + (i + 1) * (1 - minOpacity) / colorsCount;
        result.push(`rgba(0, 0, 0, ${opacity}) ${i * 100 / colorsCount}%`);
        result.push(`rgba(0, 0, 0, ${opacity}) ${(i + 1) * 100 / colorsCount}%`);
    }
    return result.join(', ');
}

export function getSpotLightBackground({ pos, distance, background, radius }) {
    const ratio = Math.max(0, radius - distance) / radius;
    if (ratio) {
        const size = (2 + ratio) * radius / 2;
        const colorsCount = Math.round((1 + ratio) * MAX_COLORS_COUNT / 2);
        return `radial-gradient(${size}px at ${pos[0]}px ${pos[1]}px, ` +
            `${getSpotLightColorsString(1 - ratio, colorsCount)}), ` + background;
    } else {
        return 'none';
    }
}
