import React from 'react';

import EventsList from '../containers/events_list.js';
import EventDetail from '../containers/event_detail.js';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <EventsList />
                <EventDetail />
            </div>
        );
    }
}
