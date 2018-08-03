import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProductDetailPage from './ProductDetailPage';
import prod_detail_mock from 'Mocks/product_detail_mock.json';

describe('Product Detail Page', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<ProductDetailPage {...prod_detail_mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not render without item', () => {
    let mock = {...prod_detail_mock};
    mock.item = null;
    const tree = renderer
      .create(<ProductDetailPage {...mock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with no sold quantity', () => {
    let mock = {...prod_detail_mock};
    mock.item.sold_quantity = 0;
    const tree = renderer
      .create(<ProductDetailPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with plural quantity', () => {
    let mock = {...prod_detail_mock};
    mock.item.sold_quantity = 5;
    const tree = renderer
      .create(<ProductDetailPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with singular quantity', () => {
    let mock = {...prod_detail_mock};
    mock.item.sold_quantity = 1;
    const tree = renderer
      .create(<ProductDetailPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with no condition', () => {
    let mock = {...prod_detail_mock};
    mock.item.condition = null;
    const tree = renderer
      .create(<ProductDetailPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with no decimals', () => {
    let mock = {...prod_detail_mock};
    mock.item.price.decimals = null;
    const tree = renderer
      .create(<ProductDetailPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render with no description', () => {
    let mock = {...prod_detail_mock};
    mock.item.description = null;
    const tree = renderer
      .create(<ProductDetailPage {...mock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});