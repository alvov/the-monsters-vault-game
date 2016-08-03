require('components/obj/obj.css');
require('./box.css');

import React from 'react';
import Plain from '../plain/Plain';

export default function({ pos, playerPos, isVisible, size, getTransformRule }) {

    const styleRules = Object.assign(getTransformRule({ pos }), {
        display: isVisible ? 'block' : 'none'
    });

    // Front-Back-Left-Right-Top
    return <div className="box obj" style={styleRules}>
        <Plain
            pos={[0, -size[1] / 2, size[2] / 2]}
            absPos={[pos[0], pos[1] - size[1] / 2, pos[2] + size[2] / 2]}
            playerPos={playerPos}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
        />
        <Plain
            pos={[0, -size[1] / 2, -size[2] / 2]}
            absPos={[pos[0], pos[1] - size[1] / 2, pos[2] - size[2] / 2]}
            playerPos={playerPos}
            size={size}
            angle={[0, 180, 0]}
            getTransformRule={getTransformRule}
        />
        <Plain
            pos={[-size[0] / 2, -size[1] / 2, 0]}
            absPos={[pos[0] - size[0] / 2, pos[1] - size[1] / 2, pos[2]]}
            playerPos={playerPos}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
        />
        <Plain
            pos={[size[0] / 2, -size[1] / 2, 0]}
            absPos={[pos[0] + size[0] / 2, pos[1] - size[1] / 2, pos[2]]}
            playerPos={playerPos}
            size={[size[2], size[1]]}
            angle={[0, 90, 0]}
            getTransformRule={getTransformRule}
        />
        {playerPos[1] > size[1] ?
            <Plain
                pos={[0, -size[1], 0]}
                absPos={[pos[0], pos[1] - size[1], pos[2]]}
                playerPos={playerPos}
                size={[size[0], size[2]]}
                angle={[90, 0, 0]}
                getTransformRule={getTransformRule}
            />
            : ''
        }
    </div>
}
