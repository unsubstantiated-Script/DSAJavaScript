const bubbleSort = (arr) => {

    let noSwaps;
    //This structure decreases the array by one each iteration. That way numbers don't get compared more than once when they're positioned.
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //Swap!
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

export {bubbleSort}