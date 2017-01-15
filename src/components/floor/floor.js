import styles from './floor.css';

import React  from 'react';
import Plain from '../plain/plain';

class Floor extends React.PureComponent {
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
