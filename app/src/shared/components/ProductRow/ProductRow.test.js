import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProductRow from './ProductRow';
import item_mock from 'Mocks/item_mock.json';

describe('Product row component', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<ProductRow item={item_mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not render without item to show', () => {
    const tree = renderer
      .create(<ProductRow />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})