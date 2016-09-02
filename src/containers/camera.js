import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Scene from './scene/scene';
import { getTransformRule } from '../lib/utils';

const Camera = ({ viewAngle }) => {
    const transformRule = getTransformRule({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return <div className="camera" style={transformRule}>
        <Scene />
    </div>;
};
Camera.propTypes = {
    viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired
};

function mapStateToProps(state) {
    return {
        viewAngle: state.viewAngle
    }
}

export default connect(mapStateToProps)(Camera);
