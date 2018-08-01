import React from 'react';

const ProductRow = (props) => {
    const { item } = props;
    const checkShipping = () => {
       
        if(item.free_shipping) {
            return (
                <span>
                    <img src="./../../assets/ic_shipping.png"
                    srcSet="./../../assets/ic_shipping.png 1x, ./../../assets/ic_shipping@2x.png.png 2x"
                    alt="shipping_logo"/>
                </span>
            );
        } else {
            return null;
        }
    }

    return (
        <li className="product-row row">
            <a className="product-thumbnail" href={`/items/${item.id}`}>
                <img src={item.picture} alt={item.title} />
            </a>
            <div className="product-description">
                <div>
                    <span>$ {item.price.amount}</span>
                    { checkShipping() }
                </div> 
                <div>
                    <a href={`/items/${item.id}`}>{item.title}</a> 
                </div>
            </div>
            <div className="product-state">
                <p>{item.state}</p>
            </div>
        </li>
    );
}

export default ProductRow;