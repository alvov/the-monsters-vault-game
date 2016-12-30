import styles from './camera.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getTransformRule } from '../../lib/utils';

function Camera({ viewAngle, children }) {
    const transformRule = getTransformRule({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return <div className={styles.root} style={transformRule}>
        {children}
    </div>;
}
Camera.propTypes = {
    viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired
};

function mapStateToProps(state) {
    return {
        viewAngle: state.viewAngle
    }
}

export default connect(mapStateToProps)(Camera);
