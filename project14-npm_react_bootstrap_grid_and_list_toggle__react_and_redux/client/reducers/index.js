import { combineReducers } from 'redux';
import EventsReducer from './events_reducer.js';

const rootReducer = combineReducers({
    events: EventsReducer
});

export default rootReducer;