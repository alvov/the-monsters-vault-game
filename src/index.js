import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enableBatching } from 'redux-batched-actions';

import Game from './containers/game';

import reducers from './reducers';

const store = createStore(enableBatching(reducers));

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('app')
);
