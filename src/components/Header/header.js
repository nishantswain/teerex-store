import React from 'react'
import { Link } from 'react-router-dom'
function header() {
    return (
        <div>header
            <div className='nav-bar'>
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/cart'}>
                    cart
                </Link>
            </div>

        </div>
    )
}

export default header