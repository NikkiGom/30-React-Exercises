import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previousNumArr: [],
            collectInput: 0, 
            previousNum: 0,
            nextNum: 0,
            operation: "", 
            result: 0
        }

        this.handleClickNum = this.handleClickNum.bind(this);
        this.handleClickOp = this.handleClickOp.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleClickNum(e) {
        var previousNum = this.state.previousNumArr;
        previousNum.push(e.currentTarget.textContent);

        var x = this.state.previousNumArr;
        var y = Number(x.join(''));
        this.setState({collectInput: y
        }, () => {
            console.log(this.state.collectInput);
        });
    }

    handleClickOp(e) {
        var x = e.currentTarget.textContent;

        this.setState({
            previousNum: this.state.collectInput,
            collectInput: 0, 
            previousNumArr: [],
            operation: x
        }, () => {
            console.log(this.state.previousNum)
        });

        switch(x) {
            case "/": 
                this.setState({operation: x});
                break;
            case "x":
                this.setState({operation: x});
                break;
            case "-":
                this.setState({operation: x});
                break;
            case "+":
                this.setState({operation: x});
                break;
        }
    }

    handleEquals() {
        this.setState({nextNum: this.state.collectInput
        }, () => {
            var previousNum = this.state.previousNum;
            var operation = this.state.operation;
            var nextNum = this.state.nextNum;

            var math_it_up = {
                '+': function (previousNum, nextNum) { return previousNum + nextNum },
                '-': function (previousNum, nextNum) { return previousNum - nextNum },
                '/': function (previousNum, nextNum) { return previousNum / nextNum },
                '*': function (previousNum, nextNum) { return previousNum * nextNum },
            }

            var result = math_it_up[this.state.operation](previousNum, nextNum);

            this.setState({result: result
            }, () => {
                this.setState({
                    collectInput: this.state.result,
                    previousNum: this.state.result,
                    previousNumArr: [],
                    nextNum: 0,
                    operation: "", 
                    result: 0
                })
            });
        });
    }

    cancel() {
        this.setState({
            previousNumArr: [],
            collectInput: 0, 
            previousNum: 0,
            nextNum: 0,
            operation: "", 
            result: 0
        })
    }

    render() {
        return(
            <div>
                <input className="display" type="number" value={this.state.collectInput} />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="button" onClick={this.handleClickNum}>1</div>
                    <div className="button" onClick={this.handleClickNum}>2</div>
                    <div className="button" onClick={this.handleClickNum}>3</div>
                    <div className="button" onClick={this.handleClickOp}>/</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="button" onClick={this.handleClickNum}>4</div>
                    <div className="button" onClick={this.handleClickNum}>5</div>
                    <div className="button" onClick={this.handleClickNum}>6</div>
                    <div className="button" onClick={this.handleClickOp}>*</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="button" onClick={this.handleClickNum}>7</div>
                    <div className="button" onClick={this.handleClickNum}>8</div>
                    <div className="button" onClick={this.handleClickNum}>9</div>
                    <div className="button" onClick={this.handleClickOp}>-</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="button" onClick={this.cancel}>C</div>
                    <div className="button" onClick={this.handleClickNum}>0</div>
                    <div className="button" onClick={this.handleClickNum}>.</div>
                    <div className="button" onClick={this.handleClickOp}>+</div>
                </div>
                <button onClick={this.handleEquals}>Equals</button>
            </div>
        );
    }
}

