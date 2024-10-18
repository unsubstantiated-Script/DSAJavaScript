/*
Uses objects, maps, structs, or sets to collect values/frequencies of values
Helps you avoid the need for nested loops of O(N^2) operations w/ arrays/strings
 */
const frequecyCounter = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    // for (let i = 0; i < arr1.length; i++) {
    //     //Passing in the square of each value
    //     let correctIndex = arr2.indexOf(arr1[i] ** 2)
    //
    //     if (correctIndex === -1) {
    //         return false;
    //     }
    //
    //     arr2.splice(correctIndex, 1)
    // }
    //return true;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //Laying out each of the counts of the objects.
    //Key is the value at hand and value is the number of incidents of that value.
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }

    }

    return true
}

//Tries to find if two numbers have the same frequency of numbers. A numerical anagram.
const sameFrequency = (int1, int2) => {
    let arr1 = int1.toString()
    let arr2 = int2.toString()

    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //Laying out each of the counts of the objects.
    //Key is the value at hand and value is the number of incidents of that value.
    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1
    }

    for (let j = 0; j < arr1.length; j++) {
        frequencyCounter2[arr2[j]] = (frequencyCounter2[arr2[j]] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true
}

//Tries to find any duplicates in array.
const areThereDuplicates = (...args) => {
    let collection = {}

    for (let val in args) {
        collection[args[val]] = (collection[args[val]] || 0) + 1
    }

    for (let key in collection) {
        if (collection[key] > 1) return true
    }

    return false
}

export {frequecyCounter, sameFrequency, areThereDuplicates}