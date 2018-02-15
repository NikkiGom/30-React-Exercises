import React from 'react';
import Events from '../containers/events.js'

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="header">Events Listing</h1>
                <Events />
            </div>
        );
    }
}