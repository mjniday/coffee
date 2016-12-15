import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import ReactTestUtils from 'react-addons-test-utils';
import AppDetailHeader from '../AppDetailHeader';

describe('the app detail header', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<AppDetailHeader />);
  const result = renderer.getRenderOutput();

  it('is a `nav` element', () => {
    expect(result.type).toBe('nav');
  });

  it('has a logo container and img', () => {
    expect(result.props.children).toEqual(
      <div className="logo">
        <Link to="/">
          <img src="beans.svg" role="presentation" />
        </Link>
      </div>
    );
  });
});