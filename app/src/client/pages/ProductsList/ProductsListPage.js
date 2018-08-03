import React from 'react';
import BreadCrumb from 'Shared/components/BreadCrumb/BreadCrumb';
import ProductRow from 'Shared/components/ProductRow/ProductRow';

const ProductsListPage = props => {
    let view = null;

    if(props) {
        const { categories, items } = props;
        view = (
            <div className="products-list">
                <div className="container">
                    <div className="row">
                        <BreadCrumb categories={ categories } />
                    </div>
                    <div className="row">
                        <div className="product-workspace">
                            <ul className="products-list__items">
                                { items ? items.map(item => <ProductRow key={item.id} item={item} />) : null }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return view;
}

export default ProductsListPage;