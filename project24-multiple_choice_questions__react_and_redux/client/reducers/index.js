import { combineReducers } from 'redux';
import QuestionsReducer from './questions_reducer.js';
import ResultReducer from './result_reducer.js';

const rootReducer = combineReducers({
    questions: QuestionsReducer,
    result: ResultReducer
});

export default rootReducer;