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

//finds the max sum in a consecutive number of ints in an array based on the
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;

    //Summing up the array.
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }


    // Summing up the window based on running total.
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        //Totals up numbers in the window
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal)
    }
    return total
}

//Finds the minimal length contiguous subarray of which the sum is greater than or equal to the number passed in.
const minSubArray = (nums, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        //If current window doesn't add up to the given sum then move the window to the right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }

        // If current window adds up to at least the sum given then we can shrink the window
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }

        //Curent total less than required total but we reach the end, need this or else an infinite loop will occur
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

//Accepts a string and finds the length of the longest substring with all distinct chars.
const findLongestSubstring = (str) => {
    let seen = {};

    let longest = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }

        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);

        seen[char] = i + 1;
    }
    console.log(seen)
    return longest;
}

export {slidingWindow, maxSubarraySum, minSubArray, findLongestSubstring}