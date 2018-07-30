import React, { Component } from 'react';

class ProductsListPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);

    }

    render () {
        let view = null;
        if(this.state) {
            view = (
            <div>
                <h2>Products Detail Page</h2>
            </div>
            );
        }

        return view;
    }
}

export default ProductsListPage;