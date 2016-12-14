import React, { Component } from 'react';
import './App.css';
import AppHome from './AppHome';
import BrewMethodDetail from './BrewMethodDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHome />
        <BrewMethodDetail />
      </div>
    );
  }
}

export default App;
