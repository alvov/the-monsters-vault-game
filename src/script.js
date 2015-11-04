require('./styles.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Scene from 'components/scene/Scene';

var Camera = () => (
    <div className="camera"><Scene/></div>
);

var Viewport = () => (
    <div className="viewport"><Camera/></div>
);

ReactDOM.render(<Viewport/>, document.body);