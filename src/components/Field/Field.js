require('components/obj/obj.css');
require('./field.css');

import utils from 'lib/utils';
import React from 'react';

export default ({ pos }) => {
    var transformRule = utils.getTransformRule({
        angle: [90, 0, 0]
    });
    return <div className="obj" style={transformRule}></div>;
}
