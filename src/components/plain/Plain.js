require('components/obj/obj.css');

import utils from 'lib/utils';
import React from 'react';

export default ({ pos, size, angle, background }) => {
    const transformRule = utils.getTransformRule({ pos, angle });
    const sizeRule = {
        width: size[0],
        height: size[1],
        margin: `-${size[1] / 2}px 0 0 -${size[0] / 2}px`
    };
    const bgRule = { background };
    const style = { ...transformRule, ...sizeRule, ...bgRule };
    return <div className="obj" style={style}></div>;
}
