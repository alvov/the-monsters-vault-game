import React from 'react';
import Plain from '../plain/plain';

export default ({ pos, playerPos, size, angle, isVisible = true, background, getTransformRule }) =>
    <Plain
        className="painting"
        pos={[pos[0], -pos[1], pos[2]]}
        playerPos={playerPos}
        size={size}
        isVisible={isVisible}
        angle={angle}
        getTransformRule={getTransformRule}
        background={background}
    />
