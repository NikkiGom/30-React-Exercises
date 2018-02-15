import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        return [ action.payload.data, ...state ]
        // return state.concat([action.payload.data]);
        //we're putting this in an array, because we are going to have multiple
        //cities coming back into this returned reducer.

        //here, the intention is to build a list of cities by recreating new arrays
        //by using concat, we create new states without mutating the state.

        //return [ action.payload.data, ...state ] means: 
        //return state.concat([action.payload.data]);

        //the first option tags new array to bottom, whereas the second tags
        //new array to top. 
    }

    return state;
} 