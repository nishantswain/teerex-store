export const applyFilters = (allProducts, filterState) => {

    const { Colour, Gender, Price, Type, FreeText } = filterState
    let allProductsTemp = allProducts

    let textArray = FreeText.value.toLowerCase().split(" ")
    textArray.forEach((item, idx) => {
        if (item === '')
            textArray.splice(idx, 1)
    })

    //filter by colour
    let selectedColours = Colour.reduce((acc, item) => {
        if (item.selected) acc.push(item.color.toLowerCase())
        return acc
    }, [])

    selectedColours = [...selectedColours, ...textArray]
    if (selectedColours.length > 0) {
        console.log("hi")
        let tempresult = allProducts.filter((item) => selectedColours.includes(item.color.toLowerCase()))
        if (tempresult.length === 0) {
            return []
        }
        else {
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
        if (tempresult.length === 0) {
            return []
        }
        else {
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
        if (tempresult.length === 0) {
            return []
        }
        else {
            allProductsTemp = tempresult
        }
    }

    //filter by price
    let selectedPrices = Price.reduce((acc, item) => {
        if (item.selected) acc.push([item.start, item.end])
        return acc
    }, [])
    console.log("s-ps", selectedPrices)
    if (selectedPrices.length > 0) {
        let tempresult = []
        allProductsTemp.forEach((item) => {
            for (let i = 0; i < selectedPrices.length; i++) {
                let [start, end] = selectedPrices[i]
                if (end && start && item.price >= Number(start) && item.price <= Number(end))
                    tempresult.push(item)
                else if (end == null && start && item.price >= Number(start))
                    tempresult.push(item)
            }
        }
        )
        return tempresult
    }
    console.log("yo")
    if (allProductsTemp.length > 0) {
        return allProductsTemp
    }

    return allProducts

}