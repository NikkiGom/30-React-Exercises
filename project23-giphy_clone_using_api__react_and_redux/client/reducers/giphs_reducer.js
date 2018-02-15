import { FETCH_GIPHS } from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
    case FETCH_GIPHS:
        return action.payload.data.data;
    }

    return state;
} 
