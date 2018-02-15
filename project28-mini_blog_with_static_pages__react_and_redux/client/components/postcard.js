import React from 'react';

export default class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({active: !this.state.active})
    }

    render() {
        return (
            <div 
                onMouseEnter={this.handleHover} 
                onMouseLeave={this.handleHover} >
                <div>{this.props.title}</div>
                <div>{this.props.subtitle}</div>
                <div>{this.props.date}</div>
                <div style={{
                    backgroundImage: this.props.backgroundImage,
                    backgroundSize: 'cover',
                    padding: '15px',
                    height: '150px',
                    width: '200px' 
                }}>
                </div>
                <div 
                    style={{display: 'none'}} 
                    className={this.state.active ? 'show' : null}
                >
                    {this.props.detail}
                </div>
            </div>
        );
    }
}