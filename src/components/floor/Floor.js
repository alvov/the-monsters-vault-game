require('components/obj/obj.css');

import { BROAD_CELL_SIZE } from '../../constants';
import React from 'react';
import Plain from '../plain/Plain';

const background = 'url(src/components/floor/floor.jpg) 50% 50%/100px 100px';

export default ({ coords2d, pos, playerPos, size, isVisible = true, getTransformRule, getSpotLightBackground }) =>
    <Plain
        className="floor"
        isVisible={isVisible}
        pos={pos}
        size={[size[0], size[2]]}
        angle={[90, 0, 0]}
        getTransformRule={getTransformRule}
        background={isVisible ? getSpotLightBackground(
            [playerPos[0] - coords2d[0][0], playerPos[2] - coords2d[0][1]],
            2 * Math.max(0, BROAD_CELL_SIZE - playerPos[1])
        ) + ', ' + background : 'none'}
    />;
