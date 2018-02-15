export function calculateResult(choice, questions) {
    return {
        type: 'CALCULATE_RESULT',
        payload: { choice: choice, 
        questions: questions }
    }
}