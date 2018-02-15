import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map.js';

class EventDetail extends React.Component{
    render() {
        if(!this.props.event) {
            return <div className="det-placeholder">Pick an Event</div>
        }
        const latcoord = parseFloat(this.props.event.locationLat);
        const longcoord = parseFloat(this.props.event.locationLong);

        
        return(
            <div className="det-wrapper">
                <div style={{paddingBottom: "10px"}}>Event:</div>
                <div style={{fontSize: "15px", paddingBottom: "10px"}}>{ this.props.event.title }, to take place at: { this.props.event.location }</div>
                <GoogleMap long={longcoord} lat={latcoord}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        event: state.eventDetail
    };
}

export default connect(mapStateToProps)(EventDetail);

