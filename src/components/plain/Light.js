require('components/obj/obj.css');

import { BROAD_CELL_SIZE } from '../../constants';
import React from 'react';

export default ({ isVisible, pos, angle, playerPos, size, background }) => {
    let backgroundStyle = {
        background: 'none'
    };
    if (isVisible) {
        // front
        if (angle[0] === 0 && angle[1] % 360 === 0 && angle[2] === 0) {
            if (playerPos[2] > pos[2]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (pos[0] - size[0] / 2), -pos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - pos[2]
                });
            }
        // back
        } else if (angle[0] === 0 && Math.abs(angle[1] % 360) === 180 && angle[2] === 0) {
            if (playerPos[2] < pos[2]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [pos[0] + size[0] / 2 - playerPos[0], -pos[1] + size[1] / 2 - playerPos[1]],
                    distance: pos[2] - playerPos[2]
                });
            }
        // left
        } else if (angle[0] === 0 && (angle[1] % 360 === -90 || angle[1] % 360 === 270) && angle[2] === 0) {
            if (playerPos[0] < pos[0]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [playerPos[2] - (pos[2] - size[0] / 2), -pos[1] + size[1] / 2 - playerPos[1]],
                    distance: pos[0] - playerPos[0]
                });
            }
        // right
        } else if (angle[0] === 0 && (angle[1] % 360 === 90 || angle[1] % 360 === -270) && angle[2] === 0) {
            if (playerPos[0] > pos[0]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [pos[2] + size[0] / 2 - playerPos[2], -pos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - pos[0]
                });
            }
        // top
        } else if ((angle[0] % 360 === 90 || angle[0] % 360 === -270) && angle[1] === 0 && angle[2] === 0) {
            if (playerPos[1] > -pos[1]) {
                backgroundStyle = getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (pos[0] - size[0] / 2), playerPos[2] - (pos[2] - size[1] / 2)],
                    distance: playerPos[1] + pos[1]
                });
            }
        }
        // todo bottom
    }
    return <div className="plain-light" style={backgroundStyle}></div>
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

function getSpotLightBackground({ pos, distance, radius }) {
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
            backgroundColor: `rgba(0, 0, 0, ${1 - ratio})`,
            backgroundPosition: `${pos[0] - size / 2}px ${pos[1] - size / 2}px`,
            backgroundSize: `${size}px`
        };
    } else {
        return {
            background: '#000'
        };
    }
}