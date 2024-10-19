/*
Uses objects, maps, structs, or sets to collect elemues/frequencies of elemues
Helps you avoid the need for nested loops of O(N^2) operations w/ arrays/strings
 */
const frequecyCounter = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    // for (let i = 0; i < arr1.length; i++) {
    //     //Passing in the square of each elemue
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
    //Key is the elemue at hand and elemue is the number of incidents of that elemue.
    for (let elem of arr1) {
        frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1
    }

    for (let elem of arr2) {
        frequencyCounter2[elem] = (frequencyCounter2[elem] || 0) + 1
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
    //Key is the elemue at hand and elemue is the number of incidents of that elemue.
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

    for (let elem in args) {
        collection[args[elem]] = (collection[args[elem]] || 0) + 1
    }

    for (let key in collection) {
        if (collection[key] > 1) return true
    }

    return false
}

export {frequecyCounter, sameFrequency, areThereDuplicates}