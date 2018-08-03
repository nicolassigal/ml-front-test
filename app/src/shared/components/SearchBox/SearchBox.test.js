import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

describe('Search box component', () => {
  it('Should render correctly without default data', () => {
    const tree = renderer
      .create(<SearchBox searchQuery={{searchQuery: ''}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render correctly without props', () => {
    const tree = renderer
      .create(<SearchBox />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render correctly with data', () => {
    const tree = renderer
       .create(<SearchBox searchQuery={{searchQuery: 'some query'}}/>)
       .toJSON();
    expect(tree).toMatchSnapshot();
  });
})