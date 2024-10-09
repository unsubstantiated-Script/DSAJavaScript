package main

func CharCount(str string) map[string]int {
	result := make(map[string]int)

	for i := 0; i < len(str); i++ {
		char := string(str[i])
		//if the char is a number/letter AND is a key in the map, add one to count
		if result[char] > 0 {
			result[char]++
			//if the char is a number/letter AND not in the object, add it and set to 1
		} else {
			result[char] = 1
		}
	}

	return result
}
