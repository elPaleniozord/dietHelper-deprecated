import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../components/Authentication/LoginPage';
import Register from '../components/Authentication/Register';
import Account from '../components/Account';
import MealPlanner from '../components/MealPlanner';
import ShoppingList from '../components/ShoppingList';
import AddRecipe from '../components/AddRecipe';
import Home from '../components/Home';
import NotFound from '../components/404';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/planner" component={MealPlanner} />
        <PrivateRoute path="/list" component={ShoppingList} />
        <PrivateRoute path="/add" component={AddRecipe} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
  
  export default AppRouter;