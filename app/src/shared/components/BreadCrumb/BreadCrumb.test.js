import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BreadCrumb from './BreadCrumb';

describe('Breadcrumb Component', () => {
  it('Should render correctly', () => {
    const MockBreadcrumbData = ['some', 'breadcrumb', 'data'];
    const tree = renderer
      .create(<BreadCrumb categories={MockBreadcrumbData}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

it('Should not render without categories', () => {
  const MockBreadcrumbData = [];
  const tree = renderer
    .create(<BreadCrumb />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
})