import React, { Component } from 'react';
import BrewMethod from './BrewMethod'

class BrewMethodsContainer extends Component {
  render () {
    return (
      <div className="Brew-methods-container">
        <BrewMethod href="/pour-over" brew_method_name="Pour Over" description="lorem ipsum something"/>
        <BrewMethod href="/french-press" brew_method_name="French Press" description="lorem ipsum something"/>
        <BrewMethod href="/pour-over" brew_method_name="Pour Over" description="lorem ipsum something"/>
        <BrewMethod href="/french-press" brew_method_name="French Press" description="lorem ipsum something"/>
      </div>
    );
  }
}

export default BrewMethodsContainer;