// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Instruments
import { middleware, sagaMiddleware, history } from './middleware';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
