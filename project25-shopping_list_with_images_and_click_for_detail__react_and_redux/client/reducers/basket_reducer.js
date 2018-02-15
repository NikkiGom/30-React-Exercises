var initialState = {
    total: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_TOTAL':
            var price = Number(action.payload.price);
            var newState = { total: state.total + price };
            return newState;
        case 'SUBTRACT_FROM_TOTAL':
            var price = Number(action.payload.price);
            var newState = { total: state.total - price };
            return newState;
    }
    
    return state;
}
