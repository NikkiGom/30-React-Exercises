import { combineReducers } from 'redux';
import PostCards from './postCards_reducer.js';

const rootReducer = combineReducers({
    cards: PostCards
});

export default rootReducer;

