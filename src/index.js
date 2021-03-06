import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import BrewMethodDetail from './BrewMethodDetail';
import AppHome from './AppHome';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={AppHome} />
      <Route path="/method/:method" component={BrewMethodDetail} />
    </Route>
  </Router>
), document.getElementById('root'))