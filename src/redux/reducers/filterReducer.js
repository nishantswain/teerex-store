import { FILTER } from "../actions/action-types";
import { filterState } from "../initialStates/initialStates";

export const filterReducer = (state = filterState, { type, payload }) => {
    // console.log(st)
    switch (type) {
        case FILTER.UPDATE_FILTERS:
            return updateFilters(state, payload)
        case FILTER.RESET_FILTERS:
            return filterState
        default:
            return state
    }
}

const updateFilters = (filterState, payload) => {
    const { category, value, selected } = payload

    if (category === 'Colour') {
        let colourFilters = filterState.Colour
        let colourIndex = colourFilters.findIndex((item) => item.color === value)
        if (colourIndex > -1) {
            colourFilters[colourIndex].selected = selected
            return { ...filterState, Colour: colourFilters }
        }
    }
    else if (category === 'Gender') {
        let genderFilters = filterState.Gender
        let genderIndex = genderFilters.findIndex((item) => item.gender === value)
        if (genderIndex > -1) {
            genderFilters[genderIndex].selected = selected
            return { ...filterState, Gender: genderFilters }
        }
    }
    else if (category === 'Price') {
        let priceFilters = filterState.Price
        let start = value.split(' ')[0]
        let priceIndex = priceFilters.findIndex((item) => item.start === start)
        if (priceIndex > -1) {
            priceFilters[priceIndex].selected = selected
            return { ...filterState, Price: priceFilters }
        }
    }
    else if (category === 'Type') {
        let typeFilters = filterState.Type
        let typeIndex = typeFilters.findIndex((item) => item.type === value)
        if (typeIndex > -1) {
            typeFilters[typeIndex].selected = selected
            return { ...filterState, Type: typeFilters }
        }
    }
    else if (category === 'FreeText') {
        filterState.FreeText = value
    }
    return filterState
}