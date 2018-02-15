import React from 'react';

export default class QuestionCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hideDiv: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(prevState => ({hideDiv: !prevState.hideDiv}));
        this.props.handleClick(e);
    }

    render() {
        return (
            <div style={{margin: '20px', display: this.state.hideDiv ? 'none' : 'block'}}>
                <div>
                    {this.props.question}
                </div>

                <div style={{
                        margin: '20px', 
                        width: '500px', 
                        display: 'flex', 
                        justifyContent: 'space-around',
                        display: this.state.hideDiv ? 'none' : 'block',
                        cursor: 'pointer'
                      }}>
                    <div onClick={() => this.handleClick(this.props.choice1)}>
                        {this.props.choice1}
                    </div>
                    <div onClick={() => this.handleClick(this.props.choice2)}>
                        {this.props.choice2}
                    </div>
                    <div onClick={() => this.handleClick(this.props.choice3)}>
                        {this.props.choice3}
                    </div>
                    <div onClick={() => this.handleClick(this.props.choice4)}>
                        {this.props.choice4}
                    </div>
                </div>
            </div>
        );
    }
}