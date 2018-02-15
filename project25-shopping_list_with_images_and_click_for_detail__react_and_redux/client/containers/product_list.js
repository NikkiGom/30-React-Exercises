import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/product.js';
import { bindActionCreators } from 'redux';
import { add, subtract, selectProduct } from '../actions/index.js';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.selectProduct = this.selectProduct.bind(this);
    }

    selectProduct(product) {
        console.log('done');
        this.props.selectProduct(product);
    }

    render() {
        var createProductList = this.props.products.map((product, i) => {
            return <Product
                    key={i} 
                    title={product.title} 
                    price={product.price} 
                    definition={product.definition}
                    source={product.source}
                    addFromTotal={() => this.props.add(product)}
                    subtractFromTotal={() => this.props.subtract(product)}
                    onClick={() => this.selectProduct(product)}
                    />
        });
        return (
            <div style={{margin: '20px'}}>
                <div>Product List</div>
                <div >{createProductList}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products : state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectProduct: selectProduct, add: add, subtract: subtract }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
