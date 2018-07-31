import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <form method='GET' action='/items' id="searchBox" autoComplete="off">
                <input type="text" name="q" id="q" defaultValue={ props.searchQuery || '' } />
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
}

export default SearchBox;