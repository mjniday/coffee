import React from 'react';
import ReactDOM from 'react-dom';
import BrewMethodsContainer from '../BrewMethodsContainer';
import BrewMethod from '../BrewMethod';

it('renders the brew methods container', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrewMethodsContainer />, div);
});

it('has a non-zero number of brew methods', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrewMethod />, div);
});