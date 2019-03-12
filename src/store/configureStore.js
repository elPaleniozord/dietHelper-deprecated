import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';
import recipesReducer from '../reducers/recipes';
import planReducer from '../reducers/plan';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer,
			user: userReducer,
			recipes: recipesReducer,
			plan: planReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}