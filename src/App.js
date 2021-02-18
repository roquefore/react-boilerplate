// Core
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

// Instruments
import { store, history } from 'init';
import { Routes } from 'router';

export const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>
);
