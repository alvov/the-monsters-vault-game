require('components/obj/obj.css');
require('components/wall/wall.css');

import React from 'react';
import Plain from '../plain/Plain';
import { BROAD_CELL_SIZE } from '../../constants';

// no support for rotated walls for now
export default ({ coords2d, pos, size, isVisible, playerPos, background, getTransformRule, getSpotLightBackground }) => {
    const transformRule = Object.assign(getTransformRule({ pos }), {
        display: isVisible ? 'block' : 'none'
    });

    // Front-Back-Left-Right-Top-Bottom
    return <div className="obj" style={transformRule}>
        <Plain
            pos={[0, -size[1] / 2, size[2] / 2]}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
            background={background + ' ' + getSpotLightBackground(
                [playerPos[0] - coords2d[0][0], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[2] - coords2d[2][1]))
            )}
        />
        <Plain
            pos={[0, -size[1] / 2, -size[2] / 2]}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
            background={background + ' ' + getSpotLightBackground(
                [playerPos[0] - coords2d[0][0], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[2] - coords2d[0][1]))
            )}
        />
        <Plain
            pos={[-size[0] / 2, -size[1] / 2, 0]}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
            background={background + ' ' + getSpotLightBackground(
                [playerPos[2] - coords2d[0][1], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[0] - coords2d[0][0]))
            )}
        />
        <Plain
            pos={[size[0] / 2, -size[1] / 2, 0]}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
            background={background + ' ' + getSpotLightBackground(
                [playerPos[2] - coords2d[0][1], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[0] - coords2d[1][0]))
            )}
        />
        <Plain
            pos={[0, -size[1], 0]}
            size={[size[0], size[2]]}
            angle={[90, 0, 0]}
            getTransformRule={getTransformRule}
            background={background}
        />
        <Plain
            pos={[0, 0, 0]}
            size={[size[0], size[2]]}
            angle={[-90, 0, 0]}
            getTransformRule={getTransformRule}
            background={background}
        />
    </div>;
}