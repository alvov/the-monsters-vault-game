import styles from './plain.css';

import React from 'react';
import DiffuseLight from '../light/diffuse';
import Light from '../light/light';
import SimpleLight from '../light/simple';
import { getTransformRule, vectorsAdd3D } from '../../lib/utils';

class Plain extends React.PureComponent {
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
        this.relativePos = Plain.getRelative(props.parentPos, props.pos);
        this.relativeAngle = Plain.getRelative(props.parentAngle, props.angle);
    }

    componentWillUpdate(nextProps) {
        this.relativePos = Plain.getRelative(nextProps.parentPos, nextProps.pos);
        this.relativeAngle = Plain.getRelative(nextProps.parentAngle, nextProps.angle);
    }

    render() {
        const { light, graphicsQuality} = this.props;

        return <div className={this.className} style={this.styleRules}>
            {graphicsQuality === 2 ? this.renderPattern() : this.renderLight(light)}
            {graphicsQuality === 2 ? this.renderLight('') : null}
        </div>;
    }

    renderPattern() {
        const { id, playerPos, size, patternId } = this.props;
        return <svg width='100%' height='100%' className={styles.diffuse}
            xmlns='http://www.w3.org/2000/svg'
        >
            <DiffuseLight
                id={id + '-light'}
                relativePos={this.relativePos}
                relativeAngle={this.relativeAngle}
                size={size}
                playerPos={playerPos}
            />
            <rect width='100%' height='100%'
                fill={'url(#' + patternId + ')'}
                filter={'url(#' + id + '-light)'}
            />
        </svg>;
    }

    renderLight(light) {
        const { playerPos, size } = this.props;
        if (light === 'simple') {
            return <SimpleLight
                relativePos={this.relativePos}
                playerPos={playerPos}
            />;
        } else {
            return <Light
                relativePos={this.relativePos}
                relativeAngle={this.relativeAngle}
                size={size}
                playerPos={playerPos}
            />;
        }
    }

    static getRelative(parent, current) {
        return parent
            ? [current].concat(parent).reduce(vectorsAdd3D)
            : current;
    }
}

export default Plain;
