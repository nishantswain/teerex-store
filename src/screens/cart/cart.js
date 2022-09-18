import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/cartItem'
import CartList from '../../components/CartList/cartList'

function Cart() {

    return (
        <div className='cart-screen'>
            <h2>Shopping Cart</h2>
            <CartList />
        </div>
    )
}

export default Cart