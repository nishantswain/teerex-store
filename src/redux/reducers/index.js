import { combineReducers } from "redux";

import { cartReducer } from './cartReducer'
import { filterReducer } from './filterReducer'
import { productReducer } from './productReducer'

const reducers = combineReducers({
    productState: productReducer,
    filterState: filterReducer,
    cartState: cartReducer,

})

export default reducers