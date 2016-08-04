import React from 'react';
import Plain from '../plain/Plain';

export default ({ coords2d, pos, playerPos, size, isVisible = true, getTransformRule }) =>
    <Plain
        className="floor"
        isVisible={isVisible}
        pos={pos}
        absPos={pos}
        playerPos={playerPos}
        size={[size[0], size[2]]}
        angle={[90, 0, 0]}
        getTransformRule={getTransformRule}
        background="url(src/components/floor/floor.jpg)"
    />;
