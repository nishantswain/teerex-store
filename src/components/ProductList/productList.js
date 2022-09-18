import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'


import { fetchProducts } from '../../redux/actions/actions'
import ProductCard from '../ProductCard/productCard'


function ProductList() {

    const allProducts = useSelector(state => state.productState.allProducts)
  
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {allProducts.map((product, idx) => <div className='product-card-component' key={idx} >
                <ProductCard id={product.id} />
            </div>)
            }
        </div>
    )
}

export default ProductList