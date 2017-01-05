import styles from './light.css';
import React  from 'react';

import { vectorsAdd3D } from '../../lib/utils';
import { SPOTLIGHT_RADIUS } from '../../constants/constants';

const DEFAULT_STYLE_RULES = {
    backgroundImage: 'none',
    backgroundColor: '#000'
};

class Light extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const {
            parentPos,
            parentAngle,
            pos,
            angle,
            size,
            playerPos
        } = this.props;
        let styleRules = DEFAULT_STYLE_RULES;
        const relativePos = parentPos ? [pos].concat(parentPos).reduce(vectorsAdd3D) : pos;
        const relativeAngle = parentAngle ? [angle].concat(parentAngle).reduce(vectorsAdd3D) : angle;

        // front
        if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
            if (playerPos[2] > relativePos[2]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - relativePos[2]
                });
            }
        // back
        } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
            if (playerPos[2] < relativePos[2]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[2] - playerPos[2]
                });
            }
        // left
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
            if (playerPos[0] < relativePos[0]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[0] - playerPos[0]
                });
            }
        // right
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
            if (playerPos[0] > relativePos[0]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - relativePos[0]
                });
            }
        // top
        } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] > -relativePos[1]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        }

        // return <div className={styles.root} style={{
        //     backgroundImage: 'none',
        //     backgroundColor: 'none'
        // }} />;
        return <div className={styles.root}
            style={styleRules}
        />;
    }

    static getPlayerSpotLightBackground({ pos, distance }) {
        const ratio = Math.max(0, SPOTLIGHT_RADIUS - distance) / SPOTLIGHT_RADIUS;
        if (ratio) {
            const size = (2 + ratio) * SPOTLIGHT_RADIUS / 2 * 10;
            return {
                backgroundPosition: pos[0] - size / 2 + 'px ' + (pos[1] - size / 2) + 'px',
                backgroundSize: size,
                backgroundColor: 'rgba(0, 0, 0, ' + (1 - ratio) + ')'
            };
        } else {
            return DEFAULT_STYLE_RULES;
        }
    }
}

export default Light;
