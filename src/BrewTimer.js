import React, { Component } from 'react';
import BrewClock from './BrewClock';

class BrewTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 0,
      ms: 0,
      ss: 0,
      mm: 0,
      intervalID: ''
    };
  }
  incrementTime() {
    this.setState({totalTime: this.state.totalTime + 100});
    var total = this.state.totalTime;

    var ms = total % 1000;
    var secs = Math.floor(total / 1000);
    var mm = Math.floor(secs / 60);
    var ss = secs % 60;

    this.setState({
      ms: ms,
      ss: ss,
      mm: mm
    })
  }
  startTimer() {
    var intervalID = setTimeout(
      setInterval(
        this.incrementTime.bind(this), 
      100),
    100);
    this.setState({intervalID: intervalID});
  }
  resetTimer() {
    clearInterval(this.state.intervalID - 1);
  }
  render() {
    return (
      <div>
        <BrewClock
          ms={this.state.ms}
          ss={this.state.ss}
          mm={this.state.mm}
        />
        <div>
          <button className="button ma1 shadow shrink" onClick={this.startTimer.bind(this)}>Start</button>
          <button className="button ma1 shadow shrink" onClick={this.resetTimer.bind(this)}>Stop</button>
        </div>
      </div>
    );
  }
}

export default BrewTimer;