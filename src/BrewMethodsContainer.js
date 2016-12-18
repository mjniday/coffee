import React, { Component } from 'react';
import BrewMethod from './BrewMethod'
import brewData from './data.json'

class BrewMethodsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brewData: brewData
    }
  }
  render () {
    return ( 
      <div className="BrewMethodsContainer">
        <p className="App-intro">
          To get started, select your preferred brew method.
        </p>
        <BrewMethod href="/method/chemex" brewMethodName={this.state.brewData['chemex']['name']} />
        <BrewMethod href="/method/french-press" brewMethodName={this.state.brewData['french-press']['name']} />
        <BrewMethod href="/method/v60" brewMethodName={this.state.brewData['v60']['name']} />
        <BrewMethod href="/method/aeropress" brewMethodName={this.state.brewData['aeropress']['name']} />
      </div>
    );
  }
}

export default BrewMethodsContainer;