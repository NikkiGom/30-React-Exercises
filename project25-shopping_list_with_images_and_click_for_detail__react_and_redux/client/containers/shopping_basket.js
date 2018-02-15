import React from 'react';
import { connect } from 'react-redux';

class ShoppingBasket extends React.Component {
    render() {
        if(!this.props.basket.total) {
            return <div style={{margin: '20px'}}>add to basket</div>
        }
        return (
            <div style={{margin: '20px'}}>your total price is: {this.props.basket.total}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket,
    };
}

export default connect(mapStateToProps)(ShoppingBasket);

