// const items = ["paper","book", "pencil", "sharpener", "rubber", "cover"]
//  function myEach(){
//   return items.forEach(alert);
// }


// check if array or object

function myEach(collection, callback) {
    let items = [];
    if (typeof collection === "object") {
        items = Object.values(collection)
    } else {
        items = collection
    }
    for (const element of items) {
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    let items = []
    if (typeof collection === "object") {
        items = Object.values(collection)
    } else {
        items = collection
    }
    let itemsNew = []
    for (const element of items) {
        itemsNew.push(callback(element))
    }
    // Return the new array without modifying the original.
    return itemsNew;
}



function myReduce(collection, callback, accumulator) {
    let items = []
    if (typeof collection === "object") {
        items = Object.values(collection)
    } else {
        items = collection
    }
    //starting value for the accumulator is optional
    if (typeof accumulator === "number") {
        for (const element of items) {
            accumulator = callback(accumulator, element, items)
        }
    } else {
        accumulator = parseInt(items.slice(0, 1))
        let itemsNew = items.slice(1)
        for (let element of itemsNew) {
            element = parseInt(element)
            accumulator = callback(accumulator, element, items)
        }
    }
    return accumulator
}



function myFind(collection, predicate) {
    let items = []
    if (typeof collection === "object") {
        items = Object.values(collection)
    } else {
        items = collection
    }
    for (const element of items) {
        if (predicate(element)) {
            return element
        }
    }
}

function myFilter(collection, predicate) {
    let items = []
    if (typeof collection === "object") {
        items = Object.values(collection)
    } else {
        items = collection
    }
    let filteredCollection = []
    for (const element of items) {
        if (predicate(element)) {
            filteredCollection.push(element)
        }
    }
    return filteredCollection
}

function mySize(collection) {
    let items = []
    if (typeof collection === "object") {
        items = Object.values(collection)
    } else {
        items = collection
    }
    let counter = 0
    for (const element of items) {
        counter++
    }
    return counter
}

function myFirst(listOfElements, noOfElementsToReturn) {
    if (typeof noOfElementsToReturn === "number") {
        return listOfElements.slice(0, noOfElementsToReturn)
    } else {
        return listOfElements[0]
    }
}

function myLast(listOfElements, noOfElementsToReturn) {
    if (typeof noOfElementsToReturn === "number") {
        return listOfElements.slice(-noOfElementsToReturn)
    } else {
        return listOfElements[mySize(listOfElements) - 1]
    }
}

function myKeys(object) {
    let newArray = []
    for (const key in object) {
        newArray.push(key)
    }
    return newArray
};

function myValues(object) {
    let newArray = []
    for (const key in object) {
        newArray.push(object[key])
    }
    return newArray
}