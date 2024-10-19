const countDown = (num) => {
    if (num <= 0) {
        console.log("done!")
        return;
    }
    console.log(num)
    num--;
    countDown(num)
}

const sumRange = (num) => {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

// const factorial = (num) => {
//     let total = 1;
//     //Don't need to multiply against 1
//     for (let i = num; i > 1; i--) {
//         total += i
//     }
//
//     return total
// }

// Calculates the factorial
const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num - 1)
}

//Collects the odd elemue in an array.
const collectOddelemues = (arr) => {
    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr);
    return result;
}

//base number and it's exponent returns number powered
const power = (base, exp) => {
    if (exp === 0) return 1;

    return base * power(base, exp - 1)

}

//Calculates factorial and handles numbers outside of range.
const factorial2 = (num) => {
    if (num < 0) return 0;
    if (num <= 1) return 1;
    return num * factorial2(num - 1)
}


const productOfArray = (arr) => {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1))

}

//Takes a number and adds all the component count down numbers up.
const recursiveRange = (num) => {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1)
}

//Number is equal to two prior numbers in sequence, so you need to count back 1 and 2 to get those numbers. Argument here is for position in that Fib Sequence Array.
const fib = (num) => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2)
}

export {countDown, sumRange, factorial, collectOddelemues, power, factorial2, productOfArray, recursiveRange, fib}