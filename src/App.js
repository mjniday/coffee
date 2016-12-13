import React, { Component } from 'react';
import beans from './beans.svg';
import './App.css';
import BrewMethodsContainer from './BrewMethodsContainer.js';
import AppFooter from './AppFooter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App;
