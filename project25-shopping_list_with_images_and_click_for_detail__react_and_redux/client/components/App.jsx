import React from 'react';
import ProductList from '../containers/product_list.js';
import ShoppingBasket from '../containers/shopping_basket.js';
import ProductDetail from '../containers/product_detail.js';

export default class App extends React.Component {
    render() {
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <ProductDetail />
                <ProductList />
                <ShoppingBasket />
            </div>
        );
    }
}