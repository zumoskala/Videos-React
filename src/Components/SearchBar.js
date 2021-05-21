import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // Make sure we call callback from App Component
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">

                    <div className="field">
                        <label htmlFor={"search-field"}>Video Search</label>
                        <input
                            type={"text"}
                            value={this.state.term}
                            onChange={this.onInputChange}
                            id={"search-field"}
                            placeholder="Search"
                        />
                    </div>

                </form>
            </div>
        );
    }

}

export default SearchBar;
