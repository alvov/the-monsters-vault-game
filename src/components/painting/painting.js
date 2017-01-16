import styles from './painting.css';

import React from 'react';
import Plain from '../plain/plain';

class Painting extends React.PureComponent {
    render() {
        const { pos, playerPos, size, angle, alias } = this.props;
        return <Plain
            light='none'
            className={styles.root + ' ' + styles[alias]}
            pos={[pos[0], -pos[1], pos[2]]}
            playerPos={playerPos}
            size={size}
            angle={angle}
        />;
    }
}

export default Painting;
