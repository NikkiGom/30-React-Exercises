import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedLocation } from '../actions/index.js';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            selectedValue: null,
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({selectedValue: e.target.value})
        console.log(e.target)
    }

    handleSubmit(e) {
        e.preventDefault();

        let strLoc = JSON.parse(this.state.selectedValue); //parse back to json/object
        console.log(strLoc);

        this.props.selectedLocation(this.state.selectedValue);
    }
    
    render() {
        var inputs = this.props.locations.map((location, i) => {
            let strLoc = JSON.stringify(location)
            return (
                <div style={{paddingBottom: "10px"}} key={i}>
                    <input type="radio" id={i} name="location" value={strLoc} />
                    <label htmlFor={'choice' + {i}}>{location.name}</label>
                </div>
            );
        });
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    {inputs}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       locations: state.locations
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedLocation: selectedLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteInput);
