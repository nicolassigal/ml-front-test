import React, {createRef} from 'react';

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <div className="container">
                <div className="row">
                    <div className="ml-logo">
                        <a href="/">
                            <img src="./../../assets/Logo_ML.png"
                            srcSet="./../../assets/Logo_ML.png 1x, ./../../assets/Logo_ML@2x.png.png 2x"
                            alt="mercado libre logo"/>
                        </a>
                    </div>
                    <form method='GET' action='/items' id="searchBox" autoComplete="off">
                            <input type="text" placeholder="Nunca dejes de buscar" name="q" id="q" defaultValue={ props.searchQuery || '' } required/>
                            <button type="submit">
                                <img src="./../../assets/ic_Search.png"
                                srcSet="./../../assets/ic_Search.png 1x, ./../../assets/ic_Search@2x.png.png 2x"
                                alt="mercado libre logo"/>
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;