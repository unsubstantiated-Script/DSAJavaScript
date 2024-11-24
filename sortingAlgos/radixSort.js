const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }

    return maxDigits
}

const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums)
    for (let i = 0; i < maxDigitCount; i++) {
        //Building the buckets to throw numbers in. 
        let digitBuckets = Array.from({length: 10}, () => [])

        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i)
            digitBuckets[digit].push(nums[j])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

export {radixSort}