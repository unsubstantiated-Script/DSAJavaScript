const sumZero = (arr) => {

    let left = 0
    //Makes sure right pointer is at end of array
    let right = arr.length - 1

    while (left < right) {
        //with post and neg this will be true
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

//Counts number of mismatched values
const countUniqueValues = (arr) => {

    //Handles empty array
    if (arr < 1) {
        return "Answer is: " + 0
    }

    //First pointer
    let i = 0

    // Second pointer built in starts at 1
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        console.log(i, j)
    }
    // Getting final value correct
    return "Answer is: " + (i + 1)
}

export {sumZero, countUniqueValues}