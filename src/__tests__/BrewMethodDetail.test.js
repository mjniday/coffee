import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import BrewMethodDetail from '../BrewMethodDetail';
import AppDetailHeader from '../AppDetailHeader';
import BrewTimer from '../BrewTimer';
import BrewCalculator from '../BrewCalculator';
import BrewMethodDescription from '../BrewMethodDescription';

describe('the brew method detail', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<BrewMethodDetail />);
  const result = renderer.getRenderOutput();

  it('renders a detail header', () => {
    const header = new result.props.children[0].type()
    expect(header).toBeInstanceOf(AppDetailHeader)
  });

  it('renders a brew timer', () => {
    const timer = new result.props.children[1].type()
    expect(timer).toBeInstanceOf(BrewTimer)
  });

  it('renders a brew calculator', () => {
    const calculator = new result.props.children[2].type()
    expect(calculator).toBeInstanceOf(BrewCalculator)
  });

  it('renders a brew method description', () => {
    const description = new result.props.children[3].type()
    expect(description).toBeInstanceOf(BrewMethodDescription)
  });
});