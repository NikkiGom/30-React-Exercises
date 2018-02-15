import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map.js';

class NoteOutput extends React.Component {
    constructor(props) {
        super(props);

        this.calculateLat = this.calculateLat.bind(this);
    }

    calculateLat() {
        var strLoc = JSON.parse(this.props.location); 
        var lat = parseFloat(strLoc.locationLat);
        return lat;
    }

    render() {
        if(!this.props.location) {
            return <div>pick a location</div>
        }
        var strLoc = JSON.parse(this.props.location); 

        const lat = Number(strLoc.locationLat);
        const long = Number(strLoc.locationLong);

        return(
            <div>
                <div style={{paddingBottom: "20px"}}>Your location choice is: {strLoc.name}</div>
                <GoogleMap lat={lat} long={long}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        location: state.selectedLocation
    };
}

export default connect(mapStateToProps)(NoteOutput);
