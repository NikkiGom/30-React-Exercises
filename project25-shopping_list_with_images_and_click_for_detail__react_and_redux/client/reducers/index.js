import { combineReducers } from 'redux';
import ProductsReducer from './product_reducer.js';
import BasketReducer from './basket_reducer.js';
import SelectProductReducer from './select_product_reducer.js';

const rootReducer = combineReducers({
    products: ProductsReducer,
    basket: BasketReducer,
    selectedProduct: SelectProductReducer
});

export default rootReducer;
