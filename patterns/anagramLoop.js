/*
Uses objects, maps, structs, or sets to collect elemues/frequencies of elemues
Helps you avoid the need for nested loops of O(N^2) operations w/ arrays/strings
 */
const anagramLoop = (first, second) => {
    // rule out length issues
    if (first.length !== second.length) {
        return false;
    }

   const lookup = {}

    for (let i = 0; i < first.length ; i++) {
        let letter = first[i];
        //if letter exists, increment. Else, set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true
}

export {anagramLoop}