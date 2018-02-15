import React from 'react';

import ProductList from '../containers/product_list.js';
import ShoppingBasket from '../containers/shopping_basket.js';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <ProductList />
                <ShoppingBasket />
            </div>
        );
    }
}