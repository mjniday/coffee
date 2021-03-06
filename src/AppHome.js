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
          <BrewMethodsContainer />
          <AppFooter />
      </div>
    );
  }
}

export default AppHome;