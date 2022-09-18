import { CART } from "../actions/action-types";
import { cartState } from "../initialStates/initialStates";


export const cartReducer = (state = cartState, { type, payload }) => {

    switch (type) {
        case CART.ADD_ITEM:
            return addItemToCart(state, payload)
        case CART.DELETE_ITEM:
            return deleteItem(state, payload)
        case CART.INCREASE_CART_ITEM_QUANTITY:
            return increaseQuantity(state, payload)
        case CART.DECREASE_CART_ITEM_QUANTITY:
            return decreaseQuantity(state, payload)
        default:
            return state
    }
}

const addItemToCart = (state, id) => {
    let { cartItems } = state
    let itemIndex = cartItems.findIndex(item => item.id === id)
    if (itemIndex === -1) {
        cartItems.push({ id, quantity: 1 })
    } else {
        cartItems[itemIndex].quantity++;
    }
    return { ...state, cartItems }

}

const decreaseQuantity = (state, id) => {
    let { cartItems } = state
    let itemIndex = cartItems.findIndex((item) => item.id === id)
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity--
    }
    return { ...state, cartItems }
}


const increaseQuantity = (state, id) => {
    let { cartItems } = state
    let itemIndex = cartItems.findIndex((item) => item.id === id)
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity++
    }
    return { ...state, cartItems }
}


const deleteItem = (state, id) => {
    let { cartItems } = state
    cartItems = cartItems.filter((item) => item.id !== id)
    return { ...state, cartItems }
}