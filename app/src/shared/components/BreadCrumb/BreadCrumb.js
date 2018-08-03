import React from 'react';

const BreadCrumb = (props) => {
    const getItems = () => {
        const { categories } = props;
    return (categories.map((category, i) => {
            if(i + 1 < categories.length){
                return (
                    <li key={i}>
                        <span>{category}</span>
                        <svg width="15" height="15" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="ui-icon ui-icon--chevron-right">
                            <g fill="#99999" fillRule="evenodd">
                                <path d="M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z"></path>
                                <path d="M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z"></path>
                            </g>
                        </svg>
                    </li>
                );
            } else {
                return (
                    <li key={i}><span>{category}</span></li>
                );
            }
        })
    )
    }
    return (
        <div className="breadcrumb">
            <ul>
                { props.categories ? getItems() : null }
            </ul>
        </div>
    );
}

export default BreadCrumb;