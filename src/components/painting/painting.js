import React from 'react';
import Plain from '../plain/plain';

class Painting extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        // todo use background
        const { pos, playerPos, size, angle, background } = this.props;
        return <Plain
            className="painting"
            pos={[pos[0], -pos[1], pos[2]]}
            playerPos={playerPos}
            size={size}
            angle={angle}
            background={background}
        />;
    }
}

export default Painting;
