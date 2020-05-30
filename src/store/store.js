import { createStore, applyMiddleware, compose} from 'redux';
import allReducers from "../reducers";
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);
const store = createStore(allReducers, enhancer);

export default store;