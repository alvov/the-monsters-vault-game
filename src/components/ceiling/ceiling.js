import styles from './ceiling.css';

import React, { PropTypes } from 'react';
import { getTransformRule } from '../../lib/utils';

class Ceiling extends React.Component {
    static propTypes = {
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired
    };

    constructor(props) {
        super(props);

        this.styleRules = {
            ...getTransformRule({
                pos: [props.pos[0], -props.pos[1], props.pos[2]],
                angle: [-90, 0, 0]
            }),
            width: props.size[0],
            height: props.size[1],
            margin: `-${props.size[1] / 2}px 0 0 -${props.size[0] / 2}px`
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <div className={'obj ' + styles.root}
            style={this.styleRules}
        />;
    }
}

export default Ceiling;
