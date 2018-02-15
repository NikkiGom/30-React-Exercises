import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="search for videos"
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}