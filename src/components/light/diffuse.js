import React, { PropTypes } from 'react';

const Z_LIGHT_COEFFICIENT = 0.125;

class DiffuseLight extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        relativePos: PropTypes.arrayOf(PropTypes.number).isRequired,
        relativeAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired
    };

    render() {
        const {
            id,
            relativePos,
            relativeAngle,
            size,
            playerPos
        } = this.props;

        let lightRelativeCoords;

        // front
        if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
            if (playerPos[2] > relativePos[2]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - relativePos[2]
                });
            }
        // back
        } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
            if (playerPos[2] < relativePos[2]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[2] - playerPos[2]
                });
            }
        // left
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
            if (playerPos[0] < relativePos[0]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[0] - playerPos[0]
                });
            }
        // right
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
            if (playerPos[0] > relativePos[0]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - relativePos[0]
                });
            }
        // top
        } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] > -relativePos[1]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        // bottom
        } else if ((relativeAngle[0] % 360 === -90 || relativeAngle[0] % 360 === 270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] < -relativePos[1]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), relativePos[2] + size[1] / 2 - playerPos[2]],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        }

        if (!lightRelativeCoords) {
            return null;
        }

        return <filter id={id}>
            <feGaussianBlur stdDeviation='3' result='blurred' />
            <feColorMatrix in='blurred' type='luminanceToAlpha' result='bumpMap' />
            <feDiffuseLighting in='bumpMap' result='light'
                surfaceScale='3'
            >
                <fePointLight
                    x={lightRelativeCoords.x}
                    y={lightRelativeCoords.y}
                    z={lightRelativeCoords.z}
                />
            </feDiffuseLighting>
            <feComposite in='light' in2='SourceGraphic'
                operator='arithmetic'
                k1='1' k2='0' k3='0' k4='0'
            />
        </filter>;
    }

    static getLightRelativeCoords({ pos, distance }) {
        return {
            x: pos[0],
            y: pos[1],
            z: Math.round(distance * Z_LIGHT_COEFFICIENT)
        };
    }
}

export default DiffuseLight;
