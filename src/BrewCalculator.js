import React, { Component } from 'react';

class BrewCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeWeight: this.props.calculations.defaultCoffeeWeight,
      waterWeight: this.props.calculations.defaultWaterWeight,
      brewRatio: this.props.calculations.brewRatio
    };

    this.calculateCoffee = this.calculateCoffee.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }
  calculateCoffee(event) {
    this.setState({ 
      coffeeWeight: Math.round(event.target.value / this.state.brewRatio * 100) / 100,
      waterWeight: event.target.value
    })
  }
  calculateWater(event) {
    this.setState({ 
      coffeeWeight: event.target.value,
      waterWeight: event.target.value * this.state.brewRatio
    })
  }
  render() {
    return (
      <div>
        <div className="input-container w-100">
          <input className="input f3 w-75" onChange={this.calculateWater} value={this.state.coffeeWeight}></input>
          <span className="dib w-25">g coffee</span>
        </div>
        <div className="input-container w-100">
          <input className="input f3 w-75" onChange={this.calculateCoffee} value={this.state.waterWeight}></input>
          <span className="dib w-25">g water</span>
        </div>
      </div>
    );
  }
}

export default BrewCalculator;