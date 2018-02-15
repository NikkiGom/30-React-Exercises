import { combineReducers } from 'redux';
import GiphsReducer from './giphs_reducer.js';

const rootReducer = combineReducers({
   giphs: GiphsReducer
});

export default rootReducer;