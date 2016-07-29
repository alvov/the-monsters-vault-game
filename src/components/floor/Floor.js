require('components/obj/obj.css');

import React from 'react';
import Plain from '../plain/Plain';

const background = 'url(src/components/floor/floor.jpg) 50% 50%/100px 100px';

export default ({ coords2d, pos, playerPos, size, isVisible = true, getTransformRule, getPlayerSpotLightBackground }) =>
    <Plain
        className="floor"
        isVisible={isVisible}
        pos={pos}
        size={[size[0], size[2]]}
        angle={[90, 0, 0]}
        getTransformRule={getTransformRule}
        background={isVisible ? getPlayerSpotLightBackground({
            pos: [playerPos[0] - coords2d[0][0], playerPos[2] - coords2d[0][1]],
            distance: playerPos[1],
            background
        }) : 'none'}
    />;
