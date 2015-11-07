require('components/obj/obj.css');
require('./wall.css');

import React from 'react';

export default ({ wallId }) => (
    <div className="wall obj" data-id={wallId}></div>
)
