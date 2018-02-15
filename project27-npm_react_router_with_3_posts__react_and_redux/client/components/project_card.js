import React from 'react';

export default class ProjectCard extends React.Component {
    render() {
        return (
            <div style={{margin: "15px"}}>
                <div>{this.props.title}</div>
                <div>{this.props.date}</div>
                <div>{this.props.focus}</div>
            </div>
        );
    }
}