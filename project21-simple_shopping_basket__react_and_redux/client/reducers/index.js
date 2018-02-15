import { combineReducers } from 'redux';
import productsReducer from './products_reducer.js';
import basketReducer from './basket_reducer.js';

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
});

export default rootReducer;