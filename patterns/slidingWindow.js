/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should
 * calculate the maximum sum of n consecutive elements in the array.
 *
 * This Sliding Window has a start and end point that slide up or down the array looking at items in the window.
 */

const slidingWindow = (arr, num) => {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        //Subtracts start number of window and adds next number ahead of window
        // [-33, 44, 55, +66, 33, 44, 5]
        tempSum = tempSum - arr[i - num] + arr[i]
        // Takes the larger of the two.
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

export {slidingWindow}