import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/cartItem'

function CartList() {
    const cartState = useSelector(state => state.cartState)
    const { cartItems } = cartState
    console.log("&&", cartItems)
    return (
        <div className='cart-list'>
            {
                cartItems.map((item, idx) => {
                    return <CartItem key={idx} {...item} />
                })
            }
        </div>
    )
}

export default CartList