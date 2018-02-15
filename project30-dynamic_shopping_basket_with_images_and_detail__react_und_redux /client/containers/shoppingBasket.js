import React from 'react';
import { connect } from 'react-redux';

class ShoppingBasket extends React.Component {
    render() {
        var arr = this.props.updateBasket.products;
        var newArrVan = arr.filter(function(product){
            return product.id === 1;
        });
        var amountVanilla = newArrVan.length;

        var arr = this.props.updateBasket.products;
        var newArrChoc = arr.filter(function(product){
            return product.id === 2;
        });
        var amountChoc = newArrChoc.length;

        var arr = this.props.updateBasket.products;
        var newArrStraw = arr.filter(function(product){
            return product.id === 3;
        });
        var amountStraw = newArrStraw.length;  

        return(
            <div>
                <div>{this.props.updateBasket.counter} items in basket</div>
                <div style={{marginBottom: '30px', marginTop: '30px'}}>
                    <div>x{amountVanilla} Vanilla Ice Cream</div>
                    <div>x{amountChoc} Chocolate Ice Cream</div>
                    <div>x{amountStraw} Strawberry Ice Cream</div>
                </div>
                <div style={{marginTop: '30px'}}>Total: {this.props.updateBasket.total} euros</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        updateBasket: state.productAndTotalAndPrice,
        products: state.products
    };
}

export default connect(mapStateToProps)(ShoppingBasket);
