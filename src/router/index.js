// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { book } from './book';

// Pages
import { Login } from 'domains/auth/pages';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={book.login} component={Login} />

            <Redirect to={book.login} />
        </Switch>
    );
};
