import React from 'react';

const ProductsListPage = props => {

    const getProductList = () => {
        const { items } = props;
        return items.map(item => <li key={item.id}><a href={`/items/${item.id}`}>{item.title}</a></li>);
    }

    let view = null;
    if(props) {
        view = (
        <div>
            <h2>Products List Page</h2>
            <ul>
                { getProductList() }
            </ul>
        </div>
        );
    }

    return view;
}

export default ProductsListPage;