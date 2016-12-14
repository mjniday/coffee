import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import BrewMethod from './BrewMethod';
import AppHome from './AppHome';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route className="App" component={App}>
      <Route path="/" component={AppHome} />
      <Route path="/method/:method" component={BrewMethod} />
    </Route>
  </Router>
), document.getElementById('root'))