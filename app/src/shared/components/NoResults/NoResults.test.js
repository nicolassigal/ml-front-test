import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoResults from './NoResults';

describe('Item not found Component', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<NoResults />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});