import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/event_thumbnail_grid.js'
import List from '../components/event_thumbnail_list.js'
import Button from '../components/toggleButton.js'

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isListOn: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isListOn: !this.state.isListOn});
        console.log('this.state.isListOn');
    }   

    render() {
        const grid = this.props.events.map((event, i) => {
            return <Grid 
            title={event.title} 
            location={event.location}
            date={event.date}
            time={event.time}
            description={event.description}
            key={i} />
        });

        const list = this.props.events.map((event, i) => {
            return <List 
            title={event.title}
            description={event.description} 
            key={i} />
        });

        return(
            <div>
                <div className="button-wrapper">
                    <Button onClickSetUp={this.handleClick}/>
                </div>
                <div className="list-grid-wrapper">{this.state.isListOn ? grid : list }</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(Events);