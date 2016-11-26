import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer
});


const loggerMiddleware = createLogger();


    /**
     * Configure and returns store
     *
     * @param {object} initialState the initial state
     * @returns {object} store
     */
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f //eslint-disable-line
    ));

  return store;
}
