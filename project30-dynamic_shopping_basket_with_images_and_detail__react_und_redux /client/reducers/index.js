import { combineReducers } from 'redux';
import Products from './product_reducer.js';
import BasketReducer from './basket_reducer.js';

const rootReducer = combineReducers({
    products: Products,
    productAndTotalAndPrice: BasketReducer
});

export default rootReducer;