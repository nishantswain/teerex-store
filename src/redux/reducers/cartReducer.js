import { CART } from "../actions/action-types";
import { cartState } from "../initialStates/initialStates";


export const cartReducer = (state = cartState, { type, payload }) => {

    switch (type) {
        case CART.ADD_ITEM:
            return {}
        case CART.DELETE_ITEM:
            return {}
        default:
            return state
    }
}