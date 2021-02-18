// Core
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

const DEV = process.env.NODE_ENV === 'development';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: (action) => (action.error ? 'firebrick' : 'deepskyblue'),
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
    },
});

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware];

if (DEV) {
    middleware.push(logger);
}

export { middleware, sagaMiddleware, history };
