import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
import { createLogger } from 'redux-logger'

let middleware = [thunk];

	middleware = [...middleware];


export default function configureStore(initialState) {

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}
