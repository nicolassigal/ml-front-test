import React from 'react';
import BreadCrumb from 'Shared/components/BreadCrumb/BreadCrumb';
import { getCurrencySymbol, getCondition } from 'Shared/Utils/utils';
import NotFoundPage from './../NotFoundPage/NotFoundPage';
const ProductsListPage = props => {
    let view = null;

    const getSoldItems = (sold_quantity, condition) => {
        const condition_es = getCondition(condition);
        let sold_label = null;
        let condition_label = null;

        if(condition_es.length) {
            condition_label = (<span>{condition_es}</span>);
        }

        if(sold_quantity > 0) {
            if(sold_quantity > 1) {
                sold_label = (<span>{sold_quantity} vendidos</span>);
            } else {
                sold_label = (<span>{sold_quantity} vendido</span>);
            }
        }
        return (
            <div className="caption-info">
                { condition_label }
                { sold_label }
            </div>
        );
    }
    const getAmount = (price) => {
        const { currency, amount, decimals } = price;
        const currency_symbol = getCurrencySymbol(currency);
        return(
            <div className="caption-amount">
                <h2>
                    <span>{currency_symbol} {amount}</span>
                    { decimals ? <sup>{decimals}</sup> : null }
                </h2>
            </div>
        )
    }

    if(props.item) {
        const { item, categories } = props;
        view = (
            <div className="product-detail">
                <div className="container">
                    <div className="row">
                        <BreadCrumb categories={ categories } />
                    </div>
                    <div className="row">
                        <div className="product-workspace product-detail__workspace">
                            <section className="row">
                                <div className="product-detail__image">
                                    <img src={item.picture} alt="item picture"/>
                                </div>
                                <div className="product-detail__caption">
                                    { getSoldItems(item.sold_quantity, item.condition) }
                                    <div className="caption-title">
                                        { item.title }
                                    </div>
                                    { getAmount(item.price) }
                                    <div className="caption-purchase">
                                        <button>Comprar</button>
                                    </div>
                                </div>
                            </section>
                            { item.description ? (
                                <section className="row">
                                    <article className="product-detail__description">
                                        <header className="description-title">
                                            <h2>Descripci&oacute;n del producto</h2>
                                        </header>
                                        <div className="description-body">
                                            <p>
                                                {
                                                    item.description.split('\n').map((line, key) => {
                                                        return <span key={key}>{line}<br/></span>
                                                    })
                                                }
                                            </p>
                                        </div> 
                                    </article>
                                </section>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
        
    } else {
        view = (
            <NotFoundPage />
        )
    }

    return view;
}

export default ProductsListPage;