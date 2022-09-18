import { Button, Card } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART } from '../../redux/actions/action-types';
const { Meta } = Card;

const productSelector = (state, id) => {
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
function ProductCard({ id }) {
    const dispatch = useDispatch()
    let [product, isPresentInCart, cartQuantity] = useSelector((state) => productSelector(state, id))
    console.log([product, isPresentInCart, cartQuantity])
    const { imageURL, name, price, quantity } = product

    const addToCartHandler = () => {
        dispatch({
            type: CART.ADD_ITEM,
            payload: id
        })
    }

    return (
        <Card
            hoverable
            style={{
                width: 200,
            }}
            cover={<img alt={name} src={imageURL} width={200} />}
        >
            <Meta title={name} />
            <div className='pc-price-add-container'>
                <h3>{'RS ' + price}</h3>

                <div className='pc-operations-button'>
                    {!isPresentInCart && <Button className='pc-add-to-cart-button' onClick={() => { addToCartHandler() }} disabled={quantity === 0}>Add to cart</Button>}

                    {quantity > 0 && isPresentInCart &&
                        (
                            <div className='pc-increase-decrease-buttons'>
                                <Button
                                    className='increase-cart-quantity' disabled={quantity === 0}>
                                    +
                                </Button>
                                <span> {quantity}</span>
                                <Button
                                    className='decrease-cart-quantity'
                                    disabled={cartQuantity === 0}
                                >
                                    -
                                </Button>
                            </div>)
                    }
                </div>
            </div>
        </Card>
    )
}

export default ProductCard




