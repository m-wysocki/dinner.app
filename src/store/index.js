import { createStore } from 'redux';
import recipesApp from '../reducers';

const store = createStore(recipesApp);

export default store;
