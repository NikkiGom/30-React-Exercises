export function add(product) {
    return {
        type: 'ADD_TO_TOTAL',
        payload: product
    }
}

export function subtract(product) {
    return {
        type: 'SUBTRACT_FROM_TOTAL',
        payload: product
    }
}

export function selectProduct(product) {
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    }
}