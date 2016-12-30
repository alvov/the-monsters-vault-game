import React  from 'react';
import Plain from '../plain/plain';

class Floor extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { pos, playerPos, size, getTransformRule } = this.props;
        return <Plain
            className="floor"
            pos={pos}
            playerPos={playerPos}
            size={[size[0], size[2]]}
            angle={[90, 0, 0]}
            getTransformRule={getTransformRule}
            background="url(src/components/floor/floor.jpg)"
        />;
    }
}

export default Floor;
