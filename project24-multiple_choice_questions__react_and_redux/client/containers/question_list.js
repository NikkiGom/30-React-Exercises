import React from 'react';
import { connect } from 'react-redux';
import QuestionCard from '../components/question_card.js';
import { bindActionCreators } from 'redux';
import { calculateResult } from '../actions/index.js';

class QuestionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scoreDisplay: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleClick(choice) {
        this.props.calculateResult(choice, this.props.questions); 
        this.setState(prevState => ({hideDiv: !prevState.hideDive}));
    }

    handleButtonClick() {
        this.setState({scoreDisplay: !this.state.scoreDisplay})
    }

    render() {
        var createQuestionsList = this.props.questions.map((question, i) => {
            return <QuestionCard 
                    handleClick={this.handleClick}
                    key={i} 
                    question={question.question}
                    choice1={question.choice1}
                    choice2={question.choice2}
                    choice3={question.choice3}
                    choice4={question.choice4}
                    answer={question.answer}
                   />
        });
        return (
            <div>
                {createQuestionsList}
                <button onClick={this.handleButtonClick}>submit answers</button>
                <div style={{display: this.state.scoreDisplay ? 'block' : 'none' }}>
                    you got {this.props.result.result} out of 4 questions right!
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        result: state.result
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ calculateResult }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);

