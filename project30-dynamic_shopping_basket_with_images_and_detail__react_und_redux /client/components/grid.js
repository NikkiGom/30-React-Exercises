import React from 'react';
import { Col } from 'react-bootstrap';

export default class GridLayout extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(product) {
        this.props.addProductToBasket(product);
    }

    render() {
        return(
            <Col xs={12} md={4}>
                <div style={{padding: '10px', backgroundColor: 'white', height: '120px', width: '100%'}}>
                    <div>{this.props.id}</div>
                    <div>{this.props.name}</div>
                    <div>{this.props.description}</div>
                    <div>$ {this.props.price}</div>
                    <div style={{float: 'right', cursor: 'pointer'}} onClick={this.handleAdd}>
                        +
                    </div>
                </div>
            </Col>
        );
    }
}