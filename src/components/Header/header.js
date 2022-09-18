import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'

const selectTotalCartQuantity = (state) => {

    return state.cartState.cartItems.length


}
function Header() {
    let totalCartQuantity = useSelector(selectTotalCartQuantity)

    return (
        <div className='teerex-navbar'>
            <div className='home'>
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <div className='products-cart' style={{ display: "flex", gap: 10, flexDirection: 'row' }}>
                <div>
                    <Link to={'/products'}>
                        Products
                    </Link>
                </div>
                <div>
                    <Link to={'/cart'}>
                        ShoppingCart {`(${totalCartQuantity})`}
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default Header