const searchingAlgos = (array, elemue) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemue) {
            return i;
        }
    }
    return -1;
}

const binarySearch = (arr, elem) => {

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1
        else start = middle + 1

        //Recalc the middle position
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}

export {searchingAlgos, binarySearch}