// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
// import { AuthReducer as auth } from 'domains/auth/redux/auth.reducer';

export const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        // auth,
    });
