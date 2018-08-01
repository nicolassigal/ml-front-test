import React from 'react';

const BreadCrumb = (props) => {

    const getItems = () => {
        const { categories } = props;
        return (categories.map((category, i) => <li key={i}>{category}</li>));
    }
    return (
        <div className="breadcrumb">
            <ul>
                { getItems() }
            </ul>
        </div>
    );
}

export default BreadCrumb;