import { PRODUCT } from "../actions/action-types";
import { productState } from "../initialStates/initialStates";

export const productReducer = (state = productState, { type, payload }) => {

    switch (type) {
        case PRODUCT.SET_ALL_PRODUCTS:
            return { ...state, allProducts: payload }
        case PRODUCT.DECREASE_QUANTITY:
            return decreaseQuantity(state, payload);
        case PRODUCT.INCREASE_QUANTITY:
            return increaseQuantity(state, payload)
        default:
            return state
    }
}


const decreaseQuantity = (state, id) => {
    let { allProducts } = state
    let itemIndex = allProducts.findIndex((item) => item.id === id)
    if (itemIndex > -1) {
        allProducts[itemIndex].quantity--
    }
    return { ...state, allProducts }
}

const increaseQuantity = (state, id) => {
    let { allProducts } = state
    let itemIndex = allProducts.findIndex((item) => item.id === id)
    if (itemIndex > -1) {
        allProducts[itemIndex].quantity++
    }
    return { ...state, allProducts }
}