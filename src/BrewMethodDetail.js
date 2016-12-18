import React, { Component } from 'react';
import AppDetailHeader from './AppDetailHeader';
import BrewTimer from './BrewTimer';
import BrewCalculator from './BrewCalculator';
import BrewMethodDescription from './BrewMethodDescription';
import brewData from './data.json';

class BrewMethodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brewData: brewData[this.props.params.method]
    };
  }
  render() {
    return (
      <div>
        <AppDetailHeader />
        <h1>{this.state.brewData['name']}</h1>
        <BrewTimer />
        <BrewCalculator calculations={this.state.brewData['calculations']} />
        <BrewMethodDescription description={this.state.brewData['description']} />
      </div>
    );
  }
}

export default BrewMethodDetail;