import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import recipesApp from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(recipesApp, composeEnhancers(applyMiddleware(thunk)));

export default store;
