import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import App from './App';
import BrewMethodsContainer from './BrewMethodsContainer';
import AppFooter from './AppFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a brew methods container', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  const brew = new result.props.children[2].type()

  expect(brew).toBeInstanceOf(BrewMethodsContainer);
});

it('renders the app footer', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  const footer = new result.props.children[3].type()

  expect(footer).toBeInstanceOf(AppFooter);
});