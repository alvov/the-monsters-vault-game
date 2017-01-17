import styles from './floor.css';

import React, { PropTypes } from 'react';
import Plain from '../plain/plain';

class Floor extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired,
        graphicsQuality: PropTypes.number.isRequired
    };

    render() {
        const { name, pos, playerPos, size, graphicsQuality } = this.props;
        return <Plain
            id={name}
            className={styles['quality-' + graphicsQuality]}
            pos={pos}
            size={[size[0], size[2]]}
            angle={[90, 0, 0]}
            playerPos={playerPos}
            patternId='floor'
            graphicsQuality={graphicsQuality}
        />;
    }
}

export default Floor;
