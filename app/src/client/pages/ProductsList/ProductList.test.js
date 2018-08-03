import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProductsListPage from './ProductsListPage';
import product_list_mock from 'Mocks/product_list_mock.json';

describe('Product List Page', () => {
  it('Should render product List page correctly', () => {
    let mock = {...product_list_mock};
    const tree = renderer
      .create(<ProductsListPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not render product list without props', () => {
    const tree = renderer
      .create(<ProductsListPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render product list without items', () => {
    let mock = {...product_list_mock};
    mock.items = [];
    const tree = renderer
      .create(<ProductsListPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})