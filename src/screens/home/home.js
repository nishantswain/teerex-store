import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
    return (
        <div className='home-page'>
            <h2>Welcome to teerex store</h2>
            <div>
                <Link to={'/products'}>Products</Link>
            </div>
            <div>
                <Link to={'/cart'}>Cart</Link>
            </div>
        </div>

    )
}

export default Home