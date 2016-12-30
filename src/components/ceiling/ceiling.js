import styles from './ceiling.css';

import React  from 'react';

class Ceiling extends React.Component {
    constructor(props) {
        super(props);

        this.styleRules = {
            ...props.getTransformRule({
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
