require('components/obj/obj.css');
require('./plain.css');

import React from 'react';
import Light from './Light.js';

export default ({ className = '', pos, absPos, playerPos, isVisible = true, size, angle = [0, 0, 0], background, getTransformRule }) => {
    return <div className={[className, 'plain', 'obj'].join(' ')} style={{
        display: isVisible ? 'block' : 'none',
        ...getTransformRule({ pos, angle }),
        width: size[0],
        height: size[1],
        margin: `-${size[1] / 2}px 0 0 -${size[0] / 2}px`,
        background
    }}>
        <Light
            isVisible={isVisible}
            pos={absPos}
            angle={angle}
            playerPos={playerPos}
            size={size}
        />
    </div>;
}
