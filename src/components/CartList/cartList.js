import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/cartItem'

function CartList() {
    const cartState = useSelector(state => state.cartState)
    const { cartItems } = cartState
    return (
        <div className='cart-list'>
            {cartItems.length > 0 ?
                cartItems.map((item, idx) => {
                    return <CartItem key={idx} {...item} />
                }) : (<h3>Your cart is empty</h3>)
            }
        </div>
    )
}

export default CartList