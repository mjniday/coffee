import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import BrewTimer from '../BrewTimer';
import BrewClock from '../BrewClock';

describe('the brew timer', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<BrewTimer />);
  const result = renderer.getRenderOutput();

  it('has a BrewClock', () => {
    const clock = new result.props.children[0].type();
    expect(clock).toBeInstanceOf(BrewClock);
  })

  it('has start and reset buttons', () => {
    const buttons = result.props.children[1].props.className;
    expect(buttons).toBe('buttons')
  });

  it('resets the timer when `reset` is clicked', () => {

  });

  it('increments the timer when `start` is clicked', () => {
    console.log(result.props.children[1].props.className)
  });
});