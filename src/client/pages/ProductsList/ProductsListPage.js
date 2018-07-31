import React from 'react';

const ProductsListPage = props => {
    let view = null;

    const getProductList = () => {
        const { items } = props;
        return items.map(item => (
            <a key={item.id} href={`/items/${item.id}`}>
                <li className="products-list__row">
                   <img src={item.picture} alt={item.title} /> 
                   <p>{item.title}</p> 
                </li>
            </a>
            )
        );
    }

    if(props) {
        view = (
            <div>
                <ul className="products-list">
                    { getProductList() }
                </ul>
            </div>
        );
    }

    return view;
}

export default ProductsListPage;