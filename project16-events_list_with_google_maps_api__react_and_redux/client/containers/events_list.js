import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectEvent } from '../actions/index.js';

class EventsList extends React.Component {
    render() {
        var createEventsList = this.props.events.map((event, i) => {
            return <li key={i} onClick={() => this.props.selectEvent(event)}>{event.title}</li>
        });
        return(
            <ul>{createEventsList}</ul>    
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectEvent: selectEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);