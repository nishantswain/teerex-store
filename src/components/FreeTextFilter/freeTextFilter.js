import { Input, Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { FILTER } from '../../redux/actions/action-types'
import './textFilter.css'
function FreeTextFilter(value) {
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const onSearchClickHandler = () => {
        console.log(searchText)
        dispatch({
            type: FILTER.UPDATE_FILTERS,
            payload: {
                category: "FreeText",
                value: searchText
            }
        })
    }
    return (
        <div className='free-text-filter'>

            <Input value={searchText} placeholder={"Search for products..."} onChange={({ target: { value } }) => {
                setSearchText(value)
            }} />
            <Button onClick={() => { onSearchClickHandler() }}>Search</Button>

        </div>
    )
}

export default FreeTextFilter