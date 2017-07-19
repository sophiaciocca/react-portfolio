import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import App from './containers/App'
import Home from './containers/Home'

export default (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>

);