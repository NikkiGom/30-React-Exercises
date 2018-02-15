import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={this.props.handleSubmitSetUp}>
            <input 
                value={this.state.inputValue} 
                onChange={this.handleChange}
                type="text" 
                placeholder="type something"
            />
        </form>
    );
}

export default Form;