import React from 'react'
import { useSelector } from 'react-redux'
import { applyFilters } from '../../redux/selectors/filterSelector'
import ProductCard from '../ProductCard/productCard'
import './productList.css'

function ProductList() {
    const filteredproducts = useSelector(state =>
        applyFilters(state.productState.allProducts, state.filterState))
    return (
        <div className='product-list' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredproducts.map((product, idx) =>
                <div className='product-card-component' key={idx} >
                    <ProductCard id={product.id} />
                </div>)
            }
        </div>
    )
}

export default ProductList

export const filterState = {
    Colour: [
        { color: 'Red', selected: false },
        { color: 'Blue', selected: false },
        { color: 'Green', selected: false },
    ],
    Gender: [
        { gender: 'Men', selected: false },
        { gender: 'Women', selected: false },

    ],
    Price: [
        { start: '0', end: '250', selected: false },
        { start: '251', end: '450', selected: false },
        { start: '450', end: null, selected: false },
    ],
    Type: [
        { type: 'Polo', selected: false },
        { type: 'Hoodie', selected: false },
        { type: 'Basic', selected: false },

    ],
    FreeText: {
        value: ''
    }
}