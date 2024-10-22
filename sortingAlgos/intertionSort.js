const insertionSort = (arr) => {
    for (let targetIdx = 1; targetIdx < arr.length; targetIdx++) {
        const targetValue = arr[targetIdx];
        for (
            let sortedIdx = targetIdx - 1;
            sortedIdx >= 0 && targetValue < arr[sortedIdx];
            sortedIdx--
        ) {
            [arr[sortedIdx], arr[sortedIdx + 1]] = [targetValue, arr[sortedIdx]];
        }
    }
    return arr;
};

export {insertionSort}