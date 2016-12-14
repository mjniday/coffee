import React, { Component } from 'react';
import AppDetailHeader from './AppDetailHeader';
import BrewTimer from './BrewTimer';
import BrewCalculator from './BrewCalculator';
import BrewMethodDescription from './BrewMethodDescription';

class BrewMethodDetail extends Component {
  render() {
    return (
      <div>
        <AppDetailHeader />
        <BrewTimer />
        <BrewCalculator />
        <BrewMethodDescription />
      </div>
    );
  }
}

export default BrewMethodDetail;