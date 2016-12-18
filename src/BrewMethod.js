import React, { Component } from 'react';
import { Link } from 'react-router';

class BrewMethod extends Component {
  render () {
    return (
      <Link to={this.props.href} className="BrewMethod f4 tl shrink shadow">
        { this.props.brewMethodName }
      </Link>
    );
  }
}

export default BrewMethod;