import React from 'react';
import App from './containers/App'
import NotFound from './containers/pages/NotFound'
import ScratchCard from './containers/scratchcard'
import AppComponent  from './components/App'
import {Router, Route, IndexRedirect} from 'react-router';
export default(history) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="home" component = {AppComponent}/>
            <Route path="scratchcard" component={ScratchCard}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
);