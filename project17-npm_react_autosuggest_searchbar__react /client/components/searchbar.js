import React from 'react';
import Autosuggest from 'react-autosuggest';

import recipes from './recipe.js';

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : recipes.filter(rec =>
      rec.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <span>{suggestion.name}</span>;

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            value: '',
            suggestions: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    }

    onChange(event, { newValue }) {
        this.setState({
          value: newValue
        });
    };

    onSuggestionsFetchRequested({ value }) {
        this.setState({
          suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested() {
        this.setState({
          suggestions: []
        });
    };
    
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
          placeholder: "Type a letter from A-O",
          value,
          onChange: this.onChange
        };

        return(
            <div>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        );
    }
}

