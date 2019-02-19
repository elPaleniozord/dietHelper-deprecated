import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../components/Authentication/LoginPage';
import Account from '../components/Account';
import NotFound from '../components/404';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Account} />
        <PrivateRoute path="/settings" component={Account} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
  
  export default AppRouter;