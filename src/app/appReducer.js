import { actionTypes } from '../utils/action'

export const initialAppState = {
    isAuthenticated: false,
    productId: 1,
    selectedMetric: 'salesImpacted',
}

export function appReducer(state, action) {
    switch (action.type) {
        case actionTypes.CHOOSE_PRODUCT:
            return { ...state, productId: action.payload.productId }
        case actionTypes.UPDATE_PRODUCT_SALES_DATA:
            return { ...state, selectedMetric: action.payload.value }
        case actionTypes.LOGGED_IN:
            return { ...state, isAuthenticated: true }
        case actionTypes.LOGGED_OUT:
            return { ...state, isAuthenticated: false }
        default:
            return state
    }
}