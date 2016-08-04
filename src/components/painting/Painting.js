import React from 'react';
import Plain from '../plain/Plain';

export default ({ pos, playerPos, size, angle, isVisible, background, getTransformRule }) =>
    <Plain
        className="painting"
        pos={pos}
        absPos={pos}
        playerPos={playerPos}
        size={size}
        isVisible={isVisible}
        angle={angle}
        getTransformRule={getTransformRule}
        background={background}
    />
