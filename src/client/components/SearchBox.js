import { Redirect } from 'react-router-dom';
import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {searchQuery: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        return <Redirect to={`/items?q=${this.state.searchQuery}`}/>;
    }

    handleChange (evt) {
        this.setState({searchQuery: evt.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  value={this.state.searchQuery}  onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;