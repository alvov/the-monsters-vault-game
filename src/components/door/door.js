require('components/obj/obj.css');
require('components/door/door.css');

import React from 'react';
import Plain from '../plain/plain';

const BAR_WIDTH = 5;
const BARS_GAP = 25;
const BAR_BACKGROUND = 'linear-gradient(to right, #000 0%, #e0e0e0 50%, #000 100%)';

export default function Door({ pos, size, playerPos, viewAngle, isVisible = true, isOpen = false, getTransformRule }) {
    const posWithInvertedY = [
        pos[0],
        isOpen ? -pos[1] * 3 : -pos[1],
        pos[2]
    ];
    const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
        display: isVisible ? 'block' : 'none'
    });
    const angle = [0, -viewAngle[0], 0];

    return <div className="door obj" style={styleRules}>
        {renderBars({ size, parentPos: [posWithInvertedY], angle, playerPos, getTransformRule })}
    </div>;
}

function renderBars({ size, parentPos, angle, playerPos, getTransformRule }) {
    const bars = [];
    const maxDimension = size[0] > size[2] ? 0 : 2;
    let key = 0;
    for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i += BARS_GAP) {
        bars.push(<Plain
            key={key}
            className="door-bar"
            pos={maxDimension === 0 ? [-size[0] / 2 + i, 0, 0] : [0, 0, size[2] - i]}
            size={[BAR_WIDTH, size[1]]}
            angle={angle}
            parentPos={parentPos}
            playerPos={playerPos}
            simpleLight={true}
            background={BAR_BACKGROUND}
            getTransformRule={getTransformRule}
        />);
        key++;
    }
    return bars;
}
