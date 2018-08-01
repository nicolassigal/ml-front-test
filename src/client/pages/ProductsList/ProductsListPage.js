import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ProductRow from '../../components/ProductRow/ProductRow';

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
                        <ul className="products-list__items">
                            { items ? items.map(item => <ProductRow key={item.id} item={item} />) : null }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return view;
}

export default ProductsListPage;