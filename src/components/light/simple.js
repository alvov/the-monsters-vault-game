import styles from './light.css';
import React  from 'react';
import { vectorsAdd3D } from '../../lib/utils';
import { SPOTLIGHT_RADIUS } from '../../constants/constants';

class SimpleLight extends React.Component {
    render() {
        const { parentPos, playerPos, pos } = this.props;
        const relativePos = parentPos ? [pos].concat(parentPos).reduce(vectorsAdd3D) : pos;
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
        return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    }
}

export default SimpleLight;
