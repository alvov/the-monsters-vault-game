require('components/obj/obj.css');

import React from 'react';
import Plain from '../plain/Plain';

const background = 'url(src/components/wall/wall.jpg) 50% 50%/cover';

// no support for rotated walls for now
export default ({ coords2d, pos, size, isVisible = true, playerPos, getTransformRule, getPlayerSpotLightBackground }) => {
    const styleRules = Object.assign(getTransformRule({ pos }), {
        display: isVisible ? 'block' : 'none'
    });

    // Front-Back-Left-Right
    return <div className="wall obj" style={styleRules}>
        <Plain
            pos={[0, -size[1] / 2, size[2] / 2]}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getPlayerSpotLightBackground({
                pos: [playerPos[0] - coords2d[0][0], playerPos[1]],
                distance: Math.abs(playerPos[2] - coords2d[2][1]),
                background
            }) : 'none'}
        />
        <Plain
            pos={[0, -size[1] / 2, -size[2] / 2]}
            size={size}
            angle={[0, 180, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getPlayerSpotLightBackground({
                pos: [size[0] - (playerPos[0] - coords2d[0][0]), playerPos[1]],
                distance: Math.abs(playerPos[2] - coords2d[0][1]),
                background
            }) : 'none'}
        />
        <Plain
            pos={[-size[0] / 2, -size[1] / 2, 0]}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getPlayerSpotLightBackground({
                pos: [playerPos[2] - coords2d[0][1], playerPos[1]],
                distance: Math.abs(playerPos[0] - coords2d[0][0]),
                background
            }) : 'none'}
        />
        <Plain
            pos={[size[0] / 2, -size[1] / 2, 0]}
            size={[size[2], size[1]]}
            angle={[0, 90, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getPlayerSpotLightBackground({
                pos: [size[2] - (playerPos[2] - coords2d[0][1]), playerPos[1]],
                distance: Math.abs(playerPos[0] - coords2d[1][0]),
                background
            }) : 'none'}
        />
    </div>;
}