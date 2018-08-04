import React from 'react';
import BreadCrumb from 'Shared/components/BreadCrumb/BreadCrumb';
import ProductRow from 'Shared/components/ProductRow/ProductRow';
import ItemNotFound from 'Shared/components/ItemNotFound/ItemNotFound';

const ProductsListPage = props => {
    let view = null;

    if(props.items && props.items.length) {
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
                                { items.map(item => <ProductRow key={item.id} item={item} />) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        view = (<ItemNotFound />)
    }

    return view;
}

export default ProductsListPage;