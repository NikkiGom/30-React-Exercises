import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { inputValue: '' }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({inputValue: e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault();

        //lets fetch weather data
        this.props.fetchWeather(this.state.inputValue);
        this.setState({inputValue: ''});
    }

   render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input
                style={{width: '300px'}} 
                onChange={this.handleInputChange}
                placeholder='type in a US state'
                value={this.state.inputValue}/>
            </form>
        );
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)