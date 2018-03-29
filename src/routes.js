import React from 'react';
import App from './containers/App'
import NotFound from './containers/pages/NotFound'
import ScratchCard from './containers/scratchcard'
import RewardList from './containers/rewardList'
import MyLinkCardList from './containers/mycardList'
import Detail from './containers/detail'
import Login from './containers/login'
import AppComponent from './components/App'
import {Router, Route, IndexRoute} from 'react-router';
export default(history) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={RewardList}/>
            
            <Route path="home" component={AppComponent}/>
            <Route path="scratchcard" component={ScratchCard}/>
            <Route path="detail" component={Detail}/>
            <Route path="rewards" component={RewardList}/>
            <Route path="mycards" component={MyLinkCardList}/>
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NotFound}/>
        
        
    </Router>
);