import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import App from './containers/App';
import configureStore from './stores';
import makeRoutes from './routes'

injectTapEventPlugin();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = makeRoutes(history);
ReactDOM.render(
  <AppContainer>
  <Provider store={store}>
    {/*<App/>*/}
    {routes}
  </Provider>
</AppContainer>, document.getElementById('app'));

if (module.hot) {
  module
    .hot
    .accept('./containers/App', () => {
      const NextApp = require('./containers/App').default; //      eslint - disable - line global - require
      ReactDOM.render(
        <AppContainer>
        <Provider store={store}>
          <NextApp/>
        </Provider>
      </AppContainer>, document.getElementById('app'));
    });
}