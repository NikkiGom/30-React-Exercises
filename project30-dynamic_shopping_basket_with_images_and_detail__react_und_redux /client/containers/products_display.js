import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { basket } from '../actions/index.js';

import GridLayout from '../components/grid.js';

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listOn: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.addProductToBasket = this.addProductToBasket.bind(this);
    }

    handleClick() {
        this.setState({listOn: !this.state.listOn});
    }

    addProductToBasket(product) {
        this.props.basket(product);
    }

    render() {
        const grid = this.props.products.map((product, i) => {
            return (
                <GridLayout
                    key={i}
                    name={product.name}
                    id={product.id}
                    description={product.description}
                    price={product.price}
                    addProductToBasket={() => this.addProductToBasket(product)}
                />
            );
        });

        return(
            <Grid>
                <Row>
                    <div style={{display: 'flex', margin: '50px'}}>
                        <Button onClick={this.handleClick}>
                            Click for grid or list display
                        </Button>
                    </div>
                </Row>
                <Row>
                    <div>
                        { grid }
                    </div>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ basket: basket }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);