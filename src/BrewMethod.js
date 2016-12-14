import React, { Component } from 'react';
import { Link } from 'react-router';

class BrewMethod extends Component {
  render () {
    return (
      <Link to={this.props.href} className="Brew-method">
        <h3>{ this.props.brew_method_name }</h3>
        <p>{ this.props.description }</p>
      </Link>
    );
  }
}

export default BrewMethod;