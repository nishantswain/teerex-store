import React, { useEffect } from 'react'
import { Checkbox } from 'antd'
import './productFilter.css'
import { useSelector, useDispatch } from 'react-redux'
import { FILTER } from '../../redux/actions/action-types'


function ProductFilter() {
    const { Colour, Gender, Price, Type } = useSelector((state) => state.filterState)
    const dispatch = useDispatch()
    const onChangeHandler = (category, value, selected) => {
        dispatch({
            type: FILTER.UPDATE_FILTERS,
            payload: {
                category,
                value,
                selected
            }
        })
    }
    return (
        <>

            <div className='product-filter-container'>

                <div className='product-filter-color'>
                    <h3>Colour</h3>
                    {
                        Colour.map((item, idx) =>
                            <div key={idx}>
                                <Checkbox
                                    value={item.color}
                                    checked={item.selected}
                                    onChange={({ target: { value, name, checked } }) => {
                                        onChangeHandler(name, value, checked)
                                    }}
                                    name={'Colour'}>{item.color}</Checkbox></div>)
                    }
                </div>
                <div className='product-filter-gender'>
                    <h3>Gender</h3>
                    {
                        Gender.map((item, idx) => <div key={idx}>
                            <Checkbox

                                value={item.gender}
                                checked={item.selected}
                                name={'Gender'}
                                onChange={({ target: { value, name, checked } }) => {
                                    onChangeHandler(name, value, checked)
                                }}
                            // selected={item.selected}
                            >
                                {item.gender}
                            </Checkbox>
                        </div>)
                    }
                </div>
                <div className='product-filter-price'>
                    <h3>Price</h3>
                    {
                        Price.map((item, idx) =>
                            <div key={idx}>
                                <Checkbox
                                    checked={item.selected}
                                    value={item.start + ' ' + item.end}
                                    name={'Price'}
                                    onChange={({ target: { value, name, checked } }) => {

                                        onChangeHandler(name, value, checked)
                                    }}
                                >
                                    {item.end ? `${item.start} - ${item.end}` : item.start}
                                </Checkbox></div>)
                    }
                </div>
                <div className='product-filter-type'>
                    <h3>Type</h3>
                    {
                        Type.map((item, idx) => <div key={idx}> <Checkbox
                            checked={item.selected}
                            value={item.type}
                            name={'Type'}
                            onChange={({ target: { value, name, checked } }) => {
                                onChangeHandler(name, value, checked)

                            }}
                        >{item.type}
                        </Checkbox>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProductFilter

