import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import BrewMethod from '../BrewMethod';

describe("the brew method component", () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<BrewMethod url="/example.com" brew_method_name="foo" description="bar"/>);
  const result = renderer.getRenderOutput();

  it('is a Link element', () => {
    expect(result.type.displayName).toBe('Link');
  });

  it('has the `Brew-method` class', () => {
    expect(result.props.className).toBe('Brew-method');
  });

  it('has a header paragraph children', () => {
    expect(result.props.children).toEqual([
      <h3>foo</h3>,
      <p>bar</p>
    ]);
  });
});