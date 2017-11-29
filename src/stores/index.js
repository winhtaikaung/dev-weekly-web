import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger'
import rootReducers from '../reducers'
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import api from '../middleware/api';

function reduxStore(initialState = {}, history) {
  let middleware = [thunk, api, routerMiddleware(history)];

  if (process.env.NODE_ENV === "production") {
    middleware = [...middleware];

  } else {
    middleware = [
      ...middleware,
      createLogger()
    ];
  }

  // if (module.hot) {   // Enable Webpack hot module replacement for reducers
  // module     .hot     .accept('../reducers', () => {       // We need to
  // require for hot reloading to work properly.       const nextReducer =
  // require('../reducers'); // eslint-disable-line global-require
  // store.replaceReducer(nextReducer);     }); }

  let finalCreateStore;
  finalCreateStore = compose(applyMiddleware(...middleware))(createStore);

  return finalCreateStore(reducers, initialState);
  // const store = createStore(reducers, initialState, window.devToolsExtension &&
  // window.devToolsExtension()); return store;
}

export default reduxStore;
