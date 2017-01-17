import styles from './wall.css';

import React, { PropTypes } from 'react';
import Plain from '../plain/plain';
import { getTransformRule } from '../../lib/utils';

// no support for rotated walls for now
class Wall extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired,
        mode: PropTypes.number.isRequired,
        graphicsQuality: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = getTransformRule({ pos: this.posWithInvertedY });
    }

    render() {
        const { name, mode, size, playerPos, graphicsQuality } = this.props;
        const className = [
            'obj',
            styles['mode-' + mode],
            styles['quality-' + graphicsQuality]
        ].join(' ');

        // Front-Back-Left-Right
        return <div className={className} style={this.styleRules}>
            <Plain
                id={name + '-0'}
                pos={[0, 0, size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 0, 0]}
                patternId={'wall0' + mode}
                graphicsQuality={graphicsQuality}
            />
            <Plain
                id={name + '-1'}
                pos={[0, 0, -size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 180, 0]}
                patternId={'wall0' + mode}
                graphicsQuality={graphicsQuality}
            />
            <Plain
                id={name + '-2'}
                pos={[-size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, -90, 0]}
                patternId={'wall0' + mode}
                graphicsQuality={graphicsQuality}
            />
            <Plain
                id={name + '-3'}
                pos={[size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, 90, 0]}
                patternId={'wall0' + mode}
                graphicsQuality={graphicsQuality}
            />
        </div>;
    }
}

export default Wall;
