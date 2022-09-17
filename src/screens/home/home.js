import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>Welcome to teerex store
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