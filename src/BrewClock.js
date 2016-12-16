import React, { Component } from 'react';

class BrewClock extends Component {
  transformTime(int) {
    var display = int < 10 ? ('0' + int).slice(-2) : int
    return display
  }
  render() {
    return (
      <div>
        {this.transformTime(this.props.mm)}:
        {this.transformTime(this.props.ss)}:
        {this.props.ms / 100}
      </div>
    );
  }
}

export default BrewClock;