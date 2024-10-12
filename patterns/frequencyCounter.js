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

export {frequecyCounter}