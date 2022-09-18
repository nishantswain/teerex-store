import { Button, Card, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CART, PRODUCT } from '../../redux/actions/action-types'
import { productSelector } from '../../redux/selectors/productSelectors'
import './cartItem.css'
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

function CartItem({ id, quantity }) {
    const dispatch = useDispatch()
    const deleteCartItem = () => {
        dispatch({
            type: CART.DELETE_ITEM,
            payload: id
        })
        dispatch({
            type: PRODUCT.INCREASE_QUANTITY,
            payload: id
        })
    }

    let [product, isPresentInCart, cartQuantity] = useSelector((state) => productSelector(state.productState, state.cartState, id))
    const { imageURL, name, price, quantity: productQuantity } = product
    const addToCartHandler = () => {
        dispatch({
            type: PRODUCT.DECREASE_QUANTITY,
            payload: id
        })
        dispatch({
            type: CART.ADD_ITEM,
            payload: id
        })
    }
    const decreaseCartQuantityHandler = () => {
        dispatch({
            type: PRODUCT.INCREASE_QUANTITY,
            payload: id
        })
        dispatch({
            type: CART.DECREASE_CART_ITEM_QUANTITY,
            payload: id
        })
    }
    return (
        <div className='cart-item'>
            <div>

                <img
                    alt={name}
                    src={imageURL}
                    width={100} />

            </div>
            <div >
                <h3>{name}</h3>
                <h3>{"Rs " + Number(price) * Number(quantity)}</h3>
            </div>
            <div >
                <Input disabled value={`Qty: ${quantity}`} />
            </div>
            <div className='pc-operations-button'>
                {!isPresentInCart && <Button className='pc-add-to-cart-button' onClick={() => { addToCartHandler() }} disabled={quantity === 0}>Add to cart</Button>}

                {isPresentInCart &&
                    (
                        <div className='pc-increase-decrease-buttons'>
                            <Button
                                className='decrease-cart-quantity'
                                disabled={cartQuantity === 0}
                                onClick={() => {
                                    decreaseCartQuantityHandler()
                                }}
                            >
                                -
                            </Button>
                            <span> {cartQuantity}</span>
                            <Button
                                className='increase-cart-quantity'
                                onClick={() => {
                                    addToCartHandler()
                                }}
                                disabled={productQuantity === 0}>
                                +
                            </Button>

                        </div>)
                }
            </div>
            <div className='cart-item-delete'>
                <Button className='' onClick={() => { deleteCartItem() }}>Delete</Button>
            </div>
        </div>
    )
}

export default CartItem