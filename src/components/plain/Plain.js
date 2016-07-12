require('components/obj/obj.css');

import React from 'react';

export default ({ pos, size, angle = [0, 0, 0], background, getTransformRule }) => {
    const transformRule = getTransformRule({ pos, angle });
    const sizeRule = {
        width: size[0],
        height: size[1],
        margin: `-${size[1] / 2}px 0 0 -${size[0] / 2}px`
    };
    return <div className="obj" style={{ ...transformRule, ...sizeRule, background }}></div>;
}
