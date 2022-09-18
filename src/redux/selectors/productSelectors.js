export const productSelector = (state, id) => {
    let { allProducts } = state.productState
    let product = allProducts.find((product) => product.id === id)

    let { cartItems } = state.cartState
    let cartQuantity = 0, isPresentInCart = false

    let itemInCart = cartItems.find((cartItem) => cartItem.id === id)
    if (itemInCart) {
        isPresentInCart = true
        cartQuantity = itemInCart.quantity
    }
    return [product, isPresentInCart, cartQuantity]
}