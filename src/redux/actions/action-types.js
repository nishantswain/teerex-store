//SET_CURRENT_PRODUCTS will have 0 or more filters to apply
//SET_ALL_PRODUCTS will be dispatched when application loads , payload will 
// have filter object

export const PRODUCT = {
    SET_ALL_PRODUCTS: "SET_ALL_PRODUCTS",
    SET_CURRENT_PRODUCTS: "SET_CURRENT_PRODUCTS",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
    INCREASE_QUANTITY: "INCREASE_QUANTITY",
}

// ADD_ITEM: "ADD_ITEM", - payload will have , item id details,quantity,price
// DELETE_ITEM: "DELETE_ITEM", payload - item id
// INCREASE_QUANTITY: "INCREASE_QUANTITY", payload will have - item id
// DECREASE_QUANTITY: "DECREASE_QUANTITY", payload will have - item id

export const CART = {
    ADD_ITEM: "ADD_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    INCREASE_CART_ITEM_QUANTITY: "INCREASE_CART_ITEM_QUANTITY",
    DECREASE_CART_ITEM_QUANTITY: "DECREASE_CART_ITEM_QUANTITY",
}


export const FILTER = {
    UPDATE_FILTERS: "UPDATE_FILTERS",
    RESET_FILTERS: "RESET_FILTERS",
}