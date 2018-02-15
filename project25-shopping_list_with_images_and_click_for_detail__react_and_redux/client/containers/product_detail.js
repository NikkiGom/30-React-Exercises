import React from 'react';
import { connect } from 'react-redux';

class ProductDetail extends React.Component {
    render() {
        if(!this.props.product) {
            return <div style={{margin: '20px'}}>click for detail</div>
        }
        return (
            <div style={{margin: '20px'}}> 
                <div>name: {this.props.product.title}</div>
                <div>price: {this.props.product.price}</div>
                <div>description: {this.props.product.definitionFull}</div>
                <div style={{
                   backgroundImage: this.props.product.source,
                   backgroundSize: 'cover',
                   padding: '15px',
                   margin: '15px',
                   height: '400px',
                   width: '450px' 
               }}>
               </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        product : state.selectedProduct
    };
}

export default connect(mapStateToProps)(ProductDetail);