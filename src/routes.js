import React from 'react';
import App from './containers/App'
import NotFound from './containers/pages/NotFound'
import ScratchCard from './containers/scratchcard'
import RewardList from './containers/rewardList'
import AppComponent from './components/App'
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
export default(history) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/rewards"/>
            <Route path="home" component={AppComponent}/>
            <Route path="scratchcard" component={ScratchCard}/>
            <Route path="rewards" component={RewardList}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
);