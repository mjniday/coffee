import React, { Component } from 'react';

class BrewClock extends Component {
  transformTime(int) {
    var display = int < 10 ? ('0' + int).slice(-2) : int
    return display
  }
  render() {
    return (
      <div className="BrewClock">
        <div className="f1 dib">{this.transformTime(this.props.mm)}:</div>
        <div className="f1 dib">{this.transformTime(this.props.ss)}</div>
        <div className="f4 dib">{this.props.ms / 100}</div>
      </div>
    );
  }
}

export default BrewClock;