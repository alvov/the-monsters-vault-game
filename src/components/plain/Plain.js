require('components/obj/obj.css');

import React from 'react';

export default ({ className = '', pos, isVisible = true, size, angle = [0, 0, 0], background, getTransformRule }) => {
    return <div className={[className, 'plain', 'obj'].join(' ')} style={{
        display: isVisible ? 'block' : 'none',
        ...getTransformRule({ pos, angle }),
        width: size[0],
        height: size[1],
        margin: `-${size[1] / 2}px 0 0 -${size[0] / 2}px`,
        background
    }}></div>;
}
