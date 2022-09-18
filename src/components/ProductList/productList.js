import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'
import ProductCard from '../ProductCard/productCard'


function ProductList() {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.productState.allProducts)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
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