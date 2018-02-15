export default function(state={test: null, products: [], counter: 0, total: 0}, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            var test = action.payload;
            var newProducts = state.products.concat([action.payload]);
            var newState = {
                test: test,
                products: newProducts, 
                counter: state.counter + 1,
                total: state.total + action.payload.price 
            }
            return newState;
    }

    return state;
}

