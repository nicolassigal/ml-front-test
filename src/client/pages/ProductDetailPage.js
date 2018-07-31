import React from 'react';

const ProductsListPage = props => {
    let view = null;
    if(props) {
        const { item } = props;
        view = (
        <div>
            <h2>Products Detail Page</h2>
            <p>
                { item.description }
            </p>
        </div>
        );
    }

    return view;
}

export default ProductsListPage;