import React, { Component } from 'react';
import beans from './beans.svg';
import BrewMethodsContainer from './BrewMethodsContainer';
import AppFooter from './AppFooter';

class AppHome extends Component {
  render() {
    return (
      <div className="AppHome">
          <div className="App-header">
            <img src={beans} className="App-logo" alt="logo" />
            <h2>Let's Get Brewin'</h2>
          </div>
          <p className="App-intro">
            To get started, select your preferred brew method.
          </p>
          <BrewMethodsContainer />
          <AppFooter />
      </div>
    );
  }
}

export default AppHome;