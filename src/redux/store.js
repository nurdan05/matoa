import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchesReducer from './reducers/watchesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  watchesReducer
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
