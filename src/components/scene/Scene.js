require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import Field from 'components/field/Field';
import Wall from 'components/wall/Wall';
import utils from 'lib/utils';

var Scene = ({ pos }) => {
    var transformRule = utils.getTransformRule({
        pos: [-pos[0], pos[2], pos[1]]
    });
    return <div className="scene obj" style={transformRule}>
        <Field/>
        <Wall wallId={0}/>
        <Wall wallId={1}/>
        <Wall wallId={2}/>
        <Wall wallId={3}/>
    </div>;
};
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number),
    viewAngle: PropTypes.arrayOf(PropTypes.number)
};

export default Scene;
