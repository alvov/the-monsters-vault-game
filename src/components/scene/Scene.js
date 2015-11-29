require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import Field from 'components/field/Field';
import Plain from 'components/obj/Plain';
import Wall from 'components/wall/Wall';
import utils from 'lib/utils';

var Scene = ({ pos, objects }) => {
    var transformRule = utils.getTransformRule({
        pos: [pos[0], pos[1], pos[2]]
    });
    var renderedObjects = objects.map((object, i) => {
        switch(object.type) {
            case 'plain':
                return <Plain key={i} pos={object.pos} size={object.size} angle={object.angle} background={object.background}/>;
            default:
                return '';
        }
    });
    return <div className="scene obj" style={transformRule}>
        {renderedObjects}
    </div>;
};
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number),
    viewAngle: PropTypes.arrayOf(PropTypes.number)
};

export default Scene;
