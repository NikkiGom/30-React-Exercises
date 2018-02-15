import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateItemObject } from '../actions/index.js'

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            itemTotal: 0
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleAdd(product) {
        var x = Number(this.props.price)
        this.setState({
            itemTotal: this.state.itemTotal + x,
            counter: this.state.counter + 1
        }, () => {
            this.props.addFromTotal(product);
        });
    }

    handleSubtract(product) {
        if(this.state.counter === 0) {
            return;
        }

        var x = Number(this.props.price)
        this.setState({
            itemTotal: this.state.itemTotal - x,
            counter: this.state.counter - 1
        }, () => {
            this.props.subtractFromTotal(product);
        });
    }
    
    render() {
        return (
            <div style={{margin: '20px', backgroundColor: '#F5F5F5', width: '310px'}}>
               <div>product name: {this.props.title}</div>
               <div>product price: {this.props.price}</div>
               <div>product definition: {this.props.definition}</div>
               <div onClick={this.props.onClick} style={{
                   backgroundImage: this.props.source,
                   backgroundSize: 'cover',
                   padding: '15px',
                   margin: '15px',
                   height: '200px',
                   width: '250px',
                   cursor: 'pointer'
               }}>
               </div>
               <div>
                   <span style={{cursor: 'pointer'}} onClick={this.handleAdd}>+ </span>
                   <span style={{cursor: 'pointer'}} onClick={this.handleSubtract}>-</span>
               </div>
               <div>
                   <div>x{this.state.counter} {this.props.title} for a sum of {this.state.itemTotal}</div>
               </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ updateItemObject: updateItemObject }, dispatch);
}

export default connect(null, mapDispatchToProps)(Product);

