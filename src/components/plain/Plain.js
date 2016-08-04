require('components/obj/obj.css');
require('./plain.css');

import React from 'react';
import { BROAD_CELL_SIZE } from '../../constants';

export default ({ className = '', pos, absPos, playerPos, isVisible = true, size, angle = [0, 0, 0], background, getTransformRule }) => {
    let backgroundStyle = {
        background: 'none'
    };
    if (isVisible) {
        // front
        if (angle[0] === 0 && angle[1] % 360 === 0 && angle[2] === 0) {
            if (playerPos[2] > absPos[2]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (absPos[0] - size[0] / 2), -absPos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - absPos[2],
                    background
                });
            }
        // back
        } else if (angle[0] === 0 && Math.abs(angle[1] % 360) === 180 && angle[2] === 0) {
            if (playerPos[2] < absPos[2]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [absPos[0] + size[0] / 2 - playerPos[0], -absPos[1] + size[1] / 2 - playerPos[1]],
                    distance: absPos[2] - playerPos[2],
                    background
                });
            }
        // left
        } else if (angle[0] === 0 && (angle[1] % 360 === -90 || angle[1] % 360 === 270) && angle[2] === 0) {
            if (playerPos[0] < absPos[0]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [playerPos[2] - (absPos[2] - size[0] / 2), -absPos[1] + size[1] / 2 - playerPos[1]],
                    distance: absPos[0] - playerPos[0],
                    background
                });
            }
        // right
        } else if (angle[0] === 0 && (angle[1] % 360 === 90 || angle[1] % 360 === -270) && angle[2] === 0) {
            if (playerPos[0] > absPos[0]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [absPos[2] + size[0] / 2 - playerPos[2], -absPos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - absPos[0],
                    background
                });
            }
        // top
        } else if ((angle[0] % 360 === 90 || angle[0] % 360 === -270) && angle[1] === 0 && angle[2] === 0) {
            if (playerPos[1] > -absPos[1]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (absPos[0] - size[0] / 2), playerPos[2] - (absPos[2] - size[1] / 2)],
                    distance: playerPos[1] + absPos[1],
                    background
                });
            }
        }
        // todo bottom
    }
    return <div className={`plain obj ${className}`} style={{
        display: isVisible ? 'block' : 'none',
        ...getTransformRule({ pos, angle }),
        width: size[0],
        height: size[1],
        margin: `-${size[1] / 2}px 0 0 -${size[0] / 2}px`,
        background: backgroundStyle.background
    }}>
        <div className="plain-overlay" style={{
            opacity: backgroundStyle.opacity || 1
        }}/>
    </div>;
}

// const MAX_COLORS_COUNT = 20;
// function getSpotLightColorsString(minOpacity = 0, colorsCount = MAX_COLORS_COUNT) {
//     const result = [];
//     for (let i = 0; i < colorsCount; i++) {
//         const opacity = minOpacity + (i + 1) * (1 - minOpacity) / colorsCount;
//         result.push(`rgba(0, 0, 0, ${opacity}) ${i * 100 / colorsCount}%`);
//         result.push(`rgba(0, 0, 0, ${opacity}) ${(i + 1) * 100 / colorsCount}%`);
//     }
//     return result.join(', ');
// }

function getPlayerSpotLightBackground(params) {
    return getSpotLightBackground({ ...params, radius: 1.1 * BROAD_CELL_SIZE });
}

function getSpotLightBackground({ pos, distance, background, radius }) {
    const ratio = Math.max(0, radius - distance) / radius;
    if (ratio) {
        // const size = (2 + ratio) * radius / 2;
        // const colorsCount = Math.round((1 + ratio) * MAX_COLORS_COUNT / 2);
        // return {
        //     background: `radial-gradient(${size}px at ${pos[0]}px ${pos[1]}px, ` +
        //         `${getSpotLightColorsString(1 - ratio, colorsCount)})`
        // };
        const size = (2 + ratio) * radius / 2 * 10;
        return {
            background: `url(src/components/plain/mask.svg) ${pos[0] - size / 2}px ${pos[1] - size / 2}px / ${size}px no-repeat, ` +
                background,
            opacity: 1 - ratio
        };
    } else {
        return {
            background: '#000'
        };
    }
}
