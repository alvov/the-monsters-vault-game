import styles from './box.css';
import React from 'react';
import Plain from '../plain/plain';
import { getTransformRule } from '../../lib/utils';

class Box extends React.PureComponent {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = getTransformRule({ pos: this.posWithInvertedY });
    }

    render() {
        const { name, pos, playerPos, size, mode, graphicsQuality } = this.props;
        const className = [
            'obj',
            styles['mode-' + mode],
            styles['quality-' + graphicsQuality]
        ].join(' ');

        // Front-Back-Left-Right-Top
        return <div className={className} style={this.styleRules}>
            <Plain
                id={name + '-0'}
                pos={[0, 0, size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 0, 0]}
                patternId={'box0' + mode}
                graphicsQuality={graphicsQuality}
            />
            <Plain
                id={name + '-1'}
                pos={[0, 0, -size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 180, 0]}
                patternId={'box0' + mode}
                graphicsQuality={graphicsQuality}
            />
            <Plain
                id={name + '-2'}
                pos={[-size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, -90, 0]}
                patternId={'box0' + mode}
                graphicsQuality={graphicsQuality}
            />
            <Plain
                id={name + '-3'}
                pos={[size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, 90, 0]}
                patternId={'box0' + mode}
                graphicsQuality={graphicsQuality}
            />
            {playerPos[1] > pos[1] + size[1] / 2 ?
                <Plain
                    id={name + '-4'}
                    pos={[0, -size[1] / 2, 0]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[size[0], size[2]]}
                    angle={[90, 0, 0]}
                    patternId={'box0' + mode}
                    graphicsQuality={graphicsQuality}
                /> :
                ''
            }
        </div>
    }
}

export default Box;
