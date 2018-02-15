var initialState = {
    result: 0, 
    counter: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'CALCULATE_RESULT':
            var result = state.result + (action.payload.choice === action.payload.questions[state.counter].answer ? +1 : null );
            var counter = state.counter + 1;
            var newState = { result: result, counter: counter };
            return newState;
    }

    return state;
}