import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ItemNotFound from './ItemNotFound';

describe('Item not found Component', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<ItemNotFound />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});