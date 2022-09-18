import axios from '../../apis/teerex-store-api'
import { PRODUCT } from './action-types'

export const fetchProducts = () => {

    return async function (dispatch, getState) {
        const response = await axios.get("/catalogue.json")
        dispatch({
            type: PRODUCT.SET_ALL_PRODUCTS,
            payload: response.data
        })
    }

}