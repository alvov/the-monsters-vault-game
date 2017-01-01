import React from 'react';
import Light from '../light/light';
import SimpleLight from '../light/simple';
import { getTransformRule } from '../../lib/utils';

class Plain extends React.Component {
    static defaultProps = {
        angle: [0, 0, 0],
        className: ''
    };

    constructor(props) {
        super(props);

        this.styleRules = {
            ...getTransformRule({ pos: props.pos, angle: props.angle }),
            width: props.size[0],
            height: props.size[1],
            margin: -props.size[1] / 2 + 'px 0 0 ' + props.size[0] / -2 + 'px'
        };
        this.className = 'obj plain ' + props.className;
    }

    render() {
        const {
            parentPos,
            parentAngle,
            pos,
            angle,
            size,
            playerPos,
            light
        } = this.props;
        return <div className={this.className} style={this.styleRules}>
            {
                light === 'simple'
                    ? <SimpleLight
                        parentPos={parentPos}
                        playerPos={playerPos}
                        pos={pos}
                    />
                    : <Light
                        parentPos={parentPos}
                        parentAngle={parentAngle}
                        pos={pos}
                        angle={angle}
                        size={size}
                        playerPos={playerPos}
                    />
            }
        </div>;
    }
}

export default Plain;
