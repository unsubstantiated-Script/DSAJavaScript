// The best for sorting items of any type.

const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    // Clean up loops will also handle edge cases w/ items not in the array.
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}

//Need to dice up this array by it's midpoints
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2);
    //Adding recursion here to keep the dicing going.
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    //merging them back
    return merge(left, right)
}

export {merge, mergeSort}