import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Home from './HomePage';

describe('Home Page', () => {
  it('Home page should render correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});