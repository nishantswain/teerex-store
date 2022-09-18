export const productSelector = (productState, cartState, id) => {
    let { allProducts } = productState
    let product = allProducts.find((product) => product.id === id)

    let { cartItems } = cartState
    let cartQuantity = 0, isPresentInCart = false

    let itemInCart = cartItems.find((cartItem) => cartItem.id === id)
    if (itemInCart) {
        isPresentInCart = true
        cartQuantity = itemInCart.quantity
    }
    return [product, isPresentInCart, cartQuantity]
}