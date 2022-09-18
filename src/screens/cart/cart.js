import React from 'react'
import CartList from '../../components/CartList/cartList'
import './cart.css'
function Cart() {

    return (
        <div className='cart-screen'>
            <h2>Shopping Cart</h2>
            <CartList />
        </div>
    )
}

export default Cart