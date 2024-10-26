//The start/end positions here allow the function to be called recursively and start from the halves we wanna work on.
const pivot = (arr, start = 0, end = arr.length - 1) => {

    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]]
    }


    let pivot = arr[start];
    let swapIndex = start;

    //We already have the start value stored, so start after that.
    //This loop will put all of the numbers less than the first to the right of that number.
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            //Doing the swaperoo
            swap(arr, swapIndex, i)
        }
    }

    //This swap will move the first number examined to a position greater than the numbers already swapped.
    swap(arr, start, swapIndex)
    return swapIndex
}

//First time through, defaults are used.
const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)

        //left
        quickSort(arr, left, pivotIndex - 1)

        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

export {pivot, quickSort}