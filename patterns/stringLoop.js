const charCount = (str) => {
// make object to return at the end
    let obj = {}
    // loop over string, for each char...
    for (let char of str) {
        char = char.toLowerCase()

        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }

    return obj
    //if the char is a number/letter AND is a key, add one to the object
    // if the char is a number/letter AND not in object, add it to object and set elem to 1
    // if char is something else (garbage code) don't do anything
    // return obj at end
}

export {charCount}