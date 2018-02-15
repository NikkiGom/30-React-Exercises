import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import Products from '../containers/products_display.js';
import ShoppingBasket from '../containers/shoppingBasket.js';

export default class App extends React.Component {
    render() {
        return(
            <Grid fluid>
                <Row>
                    <Col xs={12} md={8}>
                        <div style={{
                            backgroundColor: 'red', 
                            height: '100vh', 
                            minHeight: '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            <Products/>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div style={{
                            backgroundColor: 'yellow', 
                            height: '100vh', 
                            minHeight: '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            <ShoppingBasket/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}