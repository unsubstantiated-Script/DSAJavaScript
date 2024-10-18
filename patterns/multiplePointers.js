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

//Checks for duplicates in an array
const areThereDuplicates = (...args) => {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    })

    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}


//Takes array and number, rolls through array trying to find two numbers that equal the number passed in.
const averagePair = (arr, num) => {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}

//Takes two strings looks to see if sequence of chars forms a subsequence in the other array. Order shouldn't change.
const isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;

    if (!str1) return true;
    while (j < str2.length) {
        if(str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

export {sumZero, countUniqueValues, areThereDuplicates, averagePair, isSubsequence}