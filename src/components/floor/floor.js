import styles from './floor.css';

import React  from 'react';
import Plain from '../plain/plain';

class Floor extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { pos, playerPos, size } = this.props;
        return <Plain
            className={styles.root}
            pos={pos}
            size={[size[0], size[2]]}
            angle={[90, 0, 0]}
            playerPos={playerPos}
        />;
    }
}

export default Floor;
