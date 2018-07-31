import React from 'react';

const SearchBox = props => {
    let searchQuery = null;
    const handleSubmit = evt => {
        evt.preventDefault();
        window.location = `/items?q=${searchQuery}`;
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="text"  ref={(input) => { searchQuery = input }}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBox;