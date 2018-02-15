import { combineReducers } from 'redux';
import locationsReducer from './locations_reducer.js';
import locationSelected from './location_selected.js';

const rootReducer = combineReducers({
    locations: locationsReducer,
    selectedLocation: locationSelected
});

export default rootReducer;