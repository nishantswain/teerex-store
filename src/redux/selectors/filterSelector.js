export const applyFilters = (allProducts, filterState) => {

    const { Colour, Gender, Price, Type, FreeText } = filterState
    let allProductsTemp = allProducts
    let textArray = FreeText.value.toLowerCase().split(" ")
    textArray = textArray.map((item) => item === '' ? null : item)
    let uniqueSet = new Set()
    //color
    let selectedColours = Colour.reduce((acc, item) => {
        if (item.selected) acc.push(item.color.toLowerCase())
        return acc
    }, [])
    selectedColours = [...selectedColours, ...textArray]
    if (selectedColours.length > 0) {
        let tempresult = allProducts.filter((item) => selectedColours.includes(item.color.toLowerCase()))
        if (tempresult.length > 0) {
            allProductsTemp = tempresult
        }
    }
    // filter by Gender
    let selectedGender = Gender.reduce((acc, item) => {
        if (item.selected) acc.push(item.gender.toLowerCase())
        return acc
    }, [])
    selectedGender = [...selectedGender, ...textArray]
    if (selectedGender.length > 0) {
        let tempresult = allProductsTemp.filter((item) => selectedGender.includes(item.gender.toLowerCase()))
        if (tempresult.length > 0) {
            allProductsTemp = tempresult
        }
    }

    //filter by Type
    let selectedType = Type.reduce((acc, item) => {
        if (item.selected) acc.push(item.type.toLowerCase())
        return acc
    }, [])
    selectedType = [...selectedType, ...textArray]
    if (selectedType.length > 0) {
        let tempresult = allProductsTemp.filter((item) => selectedType.includes(item.type.toLowerCase()))
        console.log("temp res type", tempresult)
        if (tempresult.length > 0) {
            allProductsTemp = tempresult
        }
    }

    //filter by price
    let selectedPrices = Price.reduce((acc, item) => {
        if (item.selected) acc.push([item.start, item.end])
        return acc
    }, [])

    if (selectedPrices.length > 0) {
        let tempresult = []
        allProductsTemp.forEach((item) => {
            for (let i = 0; i < selectedPrices.length; i++) {
                let [start, end] = selectedPrices[i]
                if (start && end && item.price >= start && item.price <= end)
                    tempresult.push(item)
                else if (!end && start && item.price >= start)
                    tempresult.push(item)

            }
        }
        )
        if (tempresult.length > 0) {
            allProductsTemp = tempresult
        }
    }
    allProductsTemp.forEach(element => {
        uniqueSet.add(element.id)
    });

    let idArray = new Array(...uniqueSet)
    if (idArray.length > 0) {
        return allProducts.filter(product => idArray.includes(product.id))
    }
    return allProducts

}