import React, { Component } from 'react';

class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(props) {
        if(window && window.__INITIAL_DATA__) {
            this.setState(window.__INITIAL_DATA__);
        } else {
            this.setState(...props.staticContext.data);
        }
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h2>Products Detail Page</h2>
            </div>
        );
    }
}

export default ProductDetailPage;