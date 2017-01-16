import React  from 'react';

class DiffuseLight extends React.Component {
    render() {
        const {
            id,
            relativePos,
            relativeAngle,
            size,
            playerPos
        } = this.props;

        let styleRules;

        // front
        if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
            if (playerPos[2] > relativePos[2]) {
                styleRules = DiffuseLight.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - relativePos[2]
                });
            }
        // back
        } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
            if (playerPos[2] < relativePos[2]) {
                styleRules = DiffuseLight.getPlayerSpotLightBackground({
                    pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[2] - playerPos[2]
                });
            }
        // left
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
            if (playerPos[0] < relativePos[0]) {
                styleRules = DiffuseLight.getPlayerSpotLightBackground({
                    pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[0] - playerPos[0]
                });
            }
        // right
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
            if (playerPos[0] > relativePos[0]) {
                styleRules = DiffuseLight.getPlayerSpotLightBackground({
                    pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - relativePos[0]
                });
            }
        // top
        } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] > -relativePos[1]) {
                styleRules = DiffuseLight.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        // bottom
        } else if ((relativeAngle[0] % 360 === -90 || relativeAngle[0] % 360 === 270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] < -relativePos[1]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), relativePos[2] + size[1] / 2 - playerPos[2]],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        }

        if (!styleRules) {
            return null;
        }

        return <filter id={id}>
            <feGaussianBlur stdDeviation='3' result='blurred' />
            <feColorMatrix in='blurred' type='luminanceToAlpha' result='bumpMap' />
            <feDiffuseLighting in='bumpMap' result='light'
                surfaceScale='3'
            >
                <fePointLight
                    x={styleRules.x}
                    y={styleRules.y}
                    z={styleRules.z}
                />
            </feDiffuseLighting>
            <feComposite in='light' in2='SourceGraphic'
                operator='arithmetic'
                k1='1' k2='0' k3='0' k4='0'
            />
        </filter>;
    }

    static getPlayerSpotLightBackground({ pos, distance }) {
        return {
            x: pos[0],
            y: pos[1],
            z: Math.round(distance / 8)
        };
    }
}

export default DiffuseLight;
