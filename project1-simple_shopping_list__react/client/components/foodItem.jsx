import React from 'react';

export default class FoodItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.completed = this.completed.bind(this);
    }

    completed() {
        this.setState({active: !this.state.active})
    }

    render() {
        return(
            <li style={{listStyle: 'none', padding: '3px'}} className={this.state.active ? 'completed' : null}>
                <span onClick={this.props.deleteSetUp} style={{paddingRight: '10px'}} >X</span>
                <span onClick={this.completed}>{this.props.name}</span>
            </li>
        );
    }
}