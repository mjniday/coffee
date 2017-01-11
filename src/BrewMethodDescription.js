import React, { Component } from 'react';

class BrewMethodDescription extends Component {
  render() {
    return (
      <div>
        <h3>Grind size: {this.props.grindSize} </h3>
      </div>
    );
  }
}

export default BrewMethodDescription;