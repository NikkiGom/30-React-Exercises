import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/product.js';
import { bindActionCreators } from 'redux';
import { add, subtract } from '../actions/index.js';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        var createProducts = this.props.products.map((product, i) => {
            return <Product 
                    key={i} 
                    title={product.title} 
                    price={product.price}
                    addProductSetUp={() => this.props.add(product)}
                    subtractProductSetUp={() => this.props.subtract(product)}
                    />
        });

        return (
            <div>
                <div>Product List</div>
                <ul>
                   {createProducts}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
   return {
        products: state.products
   };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        add: add,
        subtract: subtract
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);