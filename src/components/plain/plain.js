import styles from './plain.css';

import React from 'react';
import { BROAD_CELL_SIZE } from '../../constants';

export default ({
    className = '',
    pos,
    parentPos,
    playerPos,
    isVisible = true,
    size,
    angle = [0, 0, 0],
    parentAngle,
    background,
    simpleLight = false,
    getTransformRule
}) => {
    let backgroundStyle = {
        background: 'none'
        // background,
        // opacity: 0
    };
    // if (false && isVisible) {
    if (isVisible) {
        const relativePos = parentPos ? [pos].concat(parentPos).reduce(vectorsAdd3D) : pos;
        const relativeAngle = parentAngle ? [angle].concat(parentAngle).reduce(vectorsAdd3D) : angle;
        if (simpleLight) {
            backgroundStyle = getPlayerSpotLightBackground({
                distance: vectorLength3D([
                    playerPos[0] - relativePos[0],
                    playerPos[1] + relativePos[1],
                    playerPos[2] - relativePos[2]
                ]),
                background,
                simpleLight
            });
        } else {
            // front
            if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
                if (playerPos[2] > relativePos[2]) {
                    backgroundStyle = getPlayerSpotLightBackground({
                        pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                        distance: playerPos[2] - relativePos[2],
                        background
                    });
                }
            // back
            } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
                if (playerPos[2] < relativePos[2]) {
                    backgroundStyle = getPlayerSpotLightBackground({
                        pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
                        distance: relativePos[2] - playerPos[2],
                        background
                    });
                }
            // left
            } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
                if (playerPos[0] < relativePos[0]) {
                    backgroundStyle = getPlayerSpotLightBackground({
                        pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                        distance: relativePos[0] - playerPos[0],
                        background
                    });
                }
            // right
            } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
                if (playerPos[0] > relativePos[0]) {
                    backgroundStyle = getPlayerSpotLightBackground({
                        pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
                        distance: playerPos[0] - relativePos[0],
                        background
                    });
                }
            // top
            } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
                if (playerPos[1] > -relativePos[1]) {
                    backgroundStyle = getPlayerSpotLightBackground({
                        pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
                        distance: playerPos[1] + relativePos[1],
                        background
                    });
                }
            }
            // todo bottom
        }
    }
    return <div className={`obj ${className}`} style={{
        display: isVisible ? 'block' : 'none',
        ...getTransformRule({ pos, angle }),
        width: size[0],
        height: size[1],
        margin: `-${size[1] / 2}px 0 0 -${size[0] / 2}px`,
        background: backgroundStyle.background
    }}>
        <div className={styles.plainOverlay} style={{
            opacity: 'opacity' in backgroundStyle ? backgroundStyle.opacity : 1
        }}/>
    </div>;
}

function getPlayerSpotLightBackground(params) {
    return getSpotLightBackground({ ...params, radius: 1.1 * BROAD_CELL_SIZE });
}

function getSpotLightBackground({ pos, distance, background, simpleLight, radius }) {
    const ratio = Math.max(0, radius - distance) / radius;
    if (ratio) {
        const result = {
            opacity: 1 - ratio
        };
        if (!simpleLight) {
            const size = (2 + ratio) * radius / 2 * 10;
            result.background = `url(src/components/plain/mask.svg) ${pos[0] - size / 2}px ${pos[1] - size / 2}px / ${size}px no-repeat, ` +
                background;
        } else {
            result.background = background;
        }
        return result;
    } else {
        return {
            background: '#000'
        };
    }
}

function vectorLength3D(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function vectorsAdd3D(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}
