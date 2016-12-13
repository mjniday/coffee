import React, { Component } from 'react';
import BrewMethod from './BrewMethod'

class BrewMethodsContainer extends Component {
  render () {
    return (
      <div className="brew-methods-container">
        <BrewMethod brew_method_name="Pour Over" description="lorem ipsum something"/>
        <BrewMethod brew_method_name="French Press" description="lorem ipsum something"/>
        <BrewMethod brew_method_name="Pour Over" description="lorem ipsum something"/>
        <BrewMethod brew_method_name="French Press" description="lorem ipsum something"/>
      </div>
    );
  }
}

export default BrewMethodsContainer;