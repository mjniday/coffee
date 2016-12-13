import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import BrewMethod from './BrewMethod';

describe("the brew method component", () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<BrewMethod url="/example.com" brew_method_name="foo" description="bar"/>);
  const result = renderer.getRenderOutput();

  it('is an anchor element', () => {
    expect(result.type).toBe('a');
  });

  it('has the `brew-method` class', () => {
    expect(result.props.className).toBe('brew-method');
  });

  it('has a header paragraph children', () => {
    expect(result.props.children).toEqual([
      <h3>foo</h3>,
      <p>bar</p>
    ]);
  });
});