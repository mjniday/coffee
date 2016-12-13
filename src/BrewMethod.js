import React, { Component } from 'react';

class BrewMethod extends Component {
  render () {
    return (
      <a className="brew-method">
        <h3>{ this.props.brew_method_name }</h3>
        <p>{ this.props.description }</p>
      </a>
    );
  }
}

export default BrewMethod;