import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'
import { selectTotalCartQuantity } from '../../redux/selectors/cartSelectors'
import { ShoppingCartOutlined } from '@ant-design/icons';

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
                <div className='products'>
                    <Link to={'/products'}>
                        Products
                    </Link>
                </div>
                <div className='cart'>
                    <Link to={'/cart'}>
                        <ShoppingCartOutlined />{`(${totalCartQuantity})`}
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default Header