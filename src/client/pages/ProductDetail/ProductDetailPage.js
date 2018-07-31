import React from 'react';

const ProductsListPage = props => {
    let view = null;
    if(props) {
        const { item } = props;
        view = (
        <div className="product-detail">
            <p>
                { item.description }
            </p>
        </div>
        );
    }

    return view;
}

export default ProductsListPage;