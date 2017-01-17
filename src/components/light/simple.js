import styles from './light.css';
import React, { PropTypes } from 'react';
import { SPOTLIGHT_RADIUS } from '../../constants/constants';

class SimpleLight extends React.Component {
    static propTypes = {
        relativePos: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired
    };

    render() {
        const { relativePos, playerPos } = this.props;
        const opacity = SimpleLight.getOpacity(
            SimpleLight.vectorLength3D([
                playerPos[0] - relativePos[0],
                playerPos[1] + relativePos[1],
                playerPos[2] - relativePos[2]
            ])
        );
        return <div className={styles.overlay}
            style={{ opacity }}
        />;
    }

    static getOpacity(distance) {
        const ratio = Math.max(0, SPOTLIGHT_RADIUS - distance) / SPOTLIGHT_RADIUS;
        return 1 - ratio;
    }

    static vectorLength3D(v) {
        return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
    }
}

export default SimpleLight;
