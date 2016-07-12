require('components/obj/obj.css');

import React from 'react';
import Plain from '../plain/Plain';

export default ({ pos, size, angle, getTransformRule }) => {
    const stemBg = '#816b5e';
    const crownBg = 'rgba(66, 139, 65, 0.7)';
    const crownSize = size[1] * 2;
    const transformRule = getTransformRule({ pos, angle });
    return <div className="obj" style={transformRule}>
        <Plain pos={[0, -size[1] / 2, 0]} size={size} angle={[0, 0, 0]} background={stemBg} getTransformRule={getTransformRule}/>
        <Plain pos={[0, -size[1] / 2, 0]} size={size} angle={[0, -90, 0]} background={stemBg} getTransformRule={getTransformRule}/>
        <Plain
            pos={[0, -size[1] - crownSize / 2, 0]} size={[crownSize, crownSize]} angle={[0, 10, 0]} background={crownBg}
            getTransformRule={getTransformRule}
        />
        <Plain
            pos={[0, -size[1] - crownSize / 2, 0]} size={[crownSize, crownSize]} angle={[0, -40, 0]} background={crownBg}
            getTransformRule={getTransformRule}
        />
        <Plain
            pos={[0, -size[1] - crownSize / 2, 0]} size={[crownSize, crownSize]} angle={[0, 100, 0]} background={crownBg}
            getTransformRule={getTransformRule}
        />
    </div>;
}
