import React, { Component } from 'react';

class ProductsListPage extends Component {
    constructor(props) {
        super(props);
        let data;
        if(window && window.__INITIAL_DATA__) {
            data = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            data = props.staticContext.data;
        }

        this.state = {
            data,
        }

        this.getProductList = this.getProductList.bind(this);
    }

    getProductList() {
        //const { items } = this.state;
        //return items.map(item => <li key={item.id}><a href={`/items/${item.id}`}>{item.title}</a></li>);
    }

    render () {
        return (
            <div>
                <h2>Products List Page</h2>
                <ul>
                    { this.getProductList() }
                </ul>
            </div>
        );
    }
}

export default ProductsListPage;