require('components/obj/obj.css');

import React from 'react';
import Plain from '../plain/Plain';

const backgrounds = ['src/components/box/box01.jpg', 'src/components/box/box02.jpg', 'src/components/box/box03.jpg'];

export default function({ pos, playerPos, isVisible, size, mode = 1, getTransformRule }) {

    const styleRules = Object.assign(getTransformRule({ pos: [pos[0], -pos[1], pos[2]] }), {
        display: isVisible ? 'block' : 'none'
    });

    const background = `url(${backgrounds[mode - 1]}) 50% 50% / cover`;

    // Front-Back-Left-Right-Top
    return <div className="box obj" style={styleRules}>
        <Plain
            pos={[0, -size[1] / 2, size[2] / 2]}
            absPos={[pos[0], -pos[1] - size[1] / 2, pos[2] + size[2] / 2]}
            playerPos={playerPos}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
            background={background}
        />
        <Plain
            pos={[0, -size[1] / 2, -size[2] / 2]}
            absPos={[pos[0], -pos[1] - size[1] / 2, pos[2] - size[2] / 2]}
            playerPos={playerPos}
            size={size}
            angle={[0, 180, 0]}
            getTransformRule={getTransformRule}
            background={background}
        />
        <Plain
            pos={[-size[0] / 2, -size[1] / 2, 0]}
            absPos={[pos[0] - size[0] / 2, -pos[1] - size[1] / 2, pos[2]]}
            playerPos={playerPos}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
            background={background}
        />
        <Plain
            pos={[size[0] / 2, -size[1] / 2, 0]}
            absPos={[pos[0] + size[0] / 2, -pos[1] - size[1] / 2, pos[2]]}
            playerPos={playerPos}
            size={[size[2], size[1]]}
            angle={[0, 90, 0]}
            getTransformRule={getTransformRule}
            background={background}
        />
        {playerPos[1] > pos[1] + size[1] / 2 ?
            <Plain
                pos={[0, -size[1], 0]}
                absPos={[pos[0], -pos[1] - size[1], pos[2]]}
                playerPos={playerPos}
                size={[size[0], size[2]]}
                angle={[90, 0, 0]}
                getTransformRule={getTransformRule}
                background={background}
            />
            : ''
        }
    </div>
}
