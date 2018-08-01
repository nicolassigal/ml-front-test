import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const ProductsListPage = props => {
    let view = null;

    const getProductList = () => {
        const { items } = props;
        return items.map(item => (
                <li className="row">
                    <a key={item.id} href={`/items/${item.id}`}>
                        <img src={item.picture} alt={item.title} />
                    </a>
                   <div className="item-description">
                        <p>$ {item.price.amount} {item.free_shipping}</p> 
                        <a key={item.id} href={`/items/${item.id}`}>$ {item.title}</a> 
                   </div>
                   <div className="item-state">
                       <p>{item.state}</p>
                   </div>
                </li>
            )
        );
    }

    if(props) {
        view = (
            <div className="products-list">
                <div className="container">
                    <div className="row">
                        <BreadCrumb categories={props.categories} />
                    </div>
                    <div className="row">
                        <ul className="products-list__items">
                            { getProductList() }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return view;
}

export default ProductsListPage;