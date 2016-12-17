import React, { Component } from 'react';
import BrewMethod from './BrewMethod'

class BrewMethodsContainer extends Component {
  render () {
    return ( 
      <div className="BrewMethodsContainer">
        <p className="App-intro">
          To get started, select your preferred brew method.
        </p>
        <BrewMethod href="/method/pour-over" brew_method_name="Pour Over" description="lorem ipsum something"/>
        <BrewMethod href="/method/french-press" brew_method_name="French Press" description="lorem ipsum something"/>
        <BrewMethod href="/method/pour-over" brew_method_name="Pour Over" description="lorem ipsum something"/>
        <BrewMethod href="/method/french-press" brew_method_name="French Press" description="lorem ipsum something"/>
      </div>
    );
  }
}

export default BrewMethodsContainer;