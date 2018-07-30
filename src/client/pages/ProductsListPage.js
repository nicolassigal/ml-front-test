import React, { Component } from 'react';

class ProductsListPage extends Component {
    constructor(props) {
        super(props);
        this.getProductList = this.getProductList.bind(this);
    }

    componentDidMount() {
        let data;
        if (window && window.__INITIAL_DATA__) {
          data = window.__INITIAL_DATA__;
          delete window.__INITIAL_DATA__;

        } else {
            if (this.props.staticContext && this.props.staticContext.data) {
                data = this.props.staticContext;
            } else {
                data = [];
            }  
        }
        this.setState({
            data,
        })
    }

    getProductList() {
        if(this.state && this.state.data) {
            const {items} = this.state.data;
            return items.map(item => <li key={item.id}><a href={`/items/${item.id}`}>{item.title}</a></li>);
        }
    }
    render () {
        return (
            <div>
                <h2>Products List Page</h2>
                <ul>
                   {this.getProductList()}
                </ul>
            </div>
        );
    }
}

export default ProductsListPage;