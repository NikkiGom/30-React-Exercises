import { combineReducers } from 'redux';
import eventsReducer from './reducer_events.js';
import eventDetailReducer from './reducer_event_details.js';

const rootReducer = combineReducers({
    events: eventsReducer,
    eventDetail: eventDetailReducer
});

export default rootReducer;