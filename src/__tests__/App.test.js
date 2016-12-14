import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import App from '../App';
import AppHome from '../AppHome';
import BrewMethodDetail from '../BrewMethodDetail';

describe("the app container", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    test = ReactDOM.render(<App />, div);
  });

  it('renders the AppHome', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const app_home = new result.props.children[0].type()
    expect(app_home).toBeInstanceOf(AppHome);
  });

  it('renders the BrewMethodDetail', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const brew_detail = new result.props.children[1].type()
    expect(brew_detail).toBeInstanceOf(BrewMethodDetail);
  });
});