import React from 'react';
import FoodItem from './FoodItem.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ['item 1', 'item 2', 'item 3'],
            inputValue: '',
            inputToggle: false
        }

        this.addFoodItem = this.addFoodItem.bind(this);
        this.inputValueTracker = this.inputValueTracker.bind(this);
        this.inputToggleActive = this.inputToggleActive.bind(this);
        this.deleteFoodItem = this.deleteFoodItem.bind(this);
    }

    addFoodItem(e) {
        e.preventDefault();
        var newArray = this.state.list;
        newArray.push(this.state.inputValue);
        this.setState({list: newArray, inputValue: ''});
    }

    inputValueTracker(e) {
        this.setState({inputValue: e.target.value})
    }

    inputToggleActive() {
        this.setState({inputToggle: !this.state.inputToggle})
    }

    deleteFoodItem(i) {
        var newArray = this.state.list;
        newArray.splice(i, 1);
        this.setState({list: newArray});
    }

    render() {
        var list = this.state.list.map((item, i) => {
            return <FoodItem key={i} name={item} deleteSetUp={() => this.deleteFoodItem(i)}/>
        })
        return(
            <div className='container'>
                <h1>Shopping List
                    <i style={{float: 'right'}} onClick={this.inputToggleActive}>{this.state.inputToggle ? '+' : '-'}</i>
                </h1>
                <form onSubmit={this.addFoodItem}>
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.inputValueTracker} 
                        style={{display: this.state.inputToggle ? 'none' : 'block'}} 
                        placeholder='Add New Todo' type="text"
                    />
                </form>
                <ul className='list'>
                    {list}
                </ul>
            </div>
        );
    }
}
