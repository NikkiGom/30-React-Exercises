export function basket(product) {
    return {
        type: 'ADD_TO_BASKET',
        payload: product
    }
}