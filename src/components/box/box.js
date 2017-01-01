import styles from './box.css';
import React from 'react';
import Plain from '../plain/plain';
import { getTransformRule } from '../../lib/utils';

class Box extends React.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = getTransformRule({ pos: this.posWithInvertedY });
        this.className = ['obj', styles.root, styles['mode-' + props.mode]].join(' ');
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { pos, playerPos, size } = this.props;

        // Front-Back-Left-Right-Top
        return <div className={this.className} style={this.styleRules}>
            <Plain
                pos={[0, 0, size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 0, 0]}
            />
            <Plain
                pos={[0, 0, -size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 180, 0]}
            />
            <Plain
                pos={[-size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, -90, 0]}
            />
            <Plain
                pos={[size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, 90, 0]}
            />
            {playerPos[1] > pos[1] + size[1] / 2 ?
                <Plain
                    pos={[0, -size[1] / 2, 0]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[size[0], size[2]]}
                    angle={[90, 0, 0]}
                /> :
                ''
            }
        </div>
    }
}

export default Box;
