import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import Code from './containers/Code'
import Writing from './containers/Writing'
import Life from './containers/Life'
import Contact from './containers/Contact'

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/code' component={Code} />
        <Route path='/writing' component={Writing} />
        <Route path='/life' component={Life} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);