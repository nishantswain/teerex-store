import React from 'react'
import FreeTextFilter from '../../components/FreeTextFilter/freeTextFilter'
import ProductFilter from '../../components/ProductFilter/productFilter'
import ProductList from '../../components/ProductList/productList'
import './shop.css'

function Shop() {
    return (

        <div className='sp-container'>
            <div className='sp-free-text-filter'>
                <FreeTextFilter onChangeHandler={() => {

                }} />
            </div>
            <div className='sp-main-area'>
                <div className='sp-product-filter'>
                    <ProductFilter />
                </div>
                <div className='sp-product-list'>
                    <ProductList />
                </div>
            </div>
        </div>

    )
}

export default Shop