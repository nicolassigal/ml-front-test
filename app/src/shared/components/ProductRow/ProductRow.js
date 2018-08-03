import React from 'react';
import { getCurrencySymbol } from '../../../shared/Utils/utils';

const ProductRow = (props) => {
    const { item } = props;

    const checkShipping = () => {
        if(item.free_shipping) {
            return (
                    <img src="./../../assets/ic_shipping.png"
                    srcSet="./../../assets/ic_shipping.png 1x, ./../../assets/ic_shipping@2x.png.png 2x"
                    alt="shipping_logo"/>
            );
        } else {
            return null;
        }
    }

    const getDecimals = (price) => {
        if(price.decimals) {
            return (<sup className="price-decimal">{price.decimals}</sup>)
        }
    }

    let view = null;
    if (item) {
        view = (
            <li className="product-row row">
                <a className="product-thumbnail" href={`/items/${item.id}`}>
                    <img src={item.picture} alt={item.title} />
                </a>
                <div className="product-info">
                    <div className="row">
                        <div className="product-info__title">
                            <span> { getCurrencySymbol(item.price.currency) } { item.price.amount }</span>
                            { getDecimals(item.price) }
                            { checkShipping() }
                        </div>
                        <div className="product-info__state">
                            <span>{item.state}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="product-info__description">
                            <a href={`/items/${item.id}`}>{item.title}</a> 
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    return view;
}

export default ProductRow;