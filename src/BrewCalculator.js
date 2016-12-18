import React, { Component } from 'react';

class BrewCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeWeight: 42,
      waterWeight: 714,
      boxSizing: 'borderBox'
    };

    this.calculateCoffee = this.calculateCoffee.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }
  calculateCoffee(event) {
    this.setState({ 
      coffeeWeight: Math.round(event.target.value / 17 * 100) / 100,
      waterWeight: event.target.value
    })
  }
  calculateWater(event) {
    this.setState({ 
      coffeeWeight: event.target.value,
      waterWeight: event.target.value * 17
    })
  }
  render() {
    return (
      <div>
        <div className="input-container w-100">
          <input className="input f3 w-75" onChange={this.calculateWater} value={this.state.coffeeWeight} placeholder="grams"></input>
          <span className="dib w-25">g coffee</span>
        </div>
        <div className="input-container w-100">
          <input className="input f3 w-75" onChange={this.calculateCoffee} value={this.state.waterWeight} placeholder="grams"></input>
          <span className="dib w-25">g water</span>
        </div>
      </div>
    );
  }
}

export default BrewCalculator;