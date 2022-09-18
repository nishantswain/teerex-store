export const productState = {
    allProducts: [],
    currentProducts: [],
    filters: {
        Colour: [],
        Gender: [],
        Price: [],
        Type: [],
        TextFilter: ''
    }
}

export const cartState = {
    cartItems: [],
}


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