import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import BrewClock from '../BrewClock';

describe('the brew clock', () => {
  const renderer = ReactTestUtils.createRenderer();

  it('displays zeros with no time elapsed', () => {
    renderer.render(<BrewClock ms={0} ss={0} mm={0} />);
    const result = renderer.getRenderOutput();
    
    expect(result.props.children).toEqual(
      ["00",":","00",":",0]
    );
  });

  it('is not all zeros after time has elapsed', () => {
    renderer.render(<BrewClock ms={1} ss={1} mm={1} />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).not.toEqual(
      ["00",":","00",":",0]
    );
  });
});

