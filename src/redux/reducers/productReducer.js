import { PRODUCT } from "../actions/action-types";
import { productState } from "../initialStates/initialStates";

export const productReducer = (state = productState, { type, payload }) => {

    switch (type) {
        case PRODUCT.SET_ALL_PRODUCTS:
            return {}
        case PRODUCT.SET_CURRENT_PRODUCTS:
            return {}
        case PRODUCT.DECREASE_QUANTITY:
            return {}
        case PRODUCT.INCREASE_QUANTITY:
            return {}
        default:
            return state
    }
}