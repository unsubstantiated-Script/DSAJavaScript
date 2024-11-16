/**
 * PATTERNS
 */

// import {frequecyCounter} from "./patterns/patterns.js";
// import {anagramLoop} from "./patterns/anagramLoop.js";

// const string = "Dooo wa diddy! *ASDF*ASD*F"
// console.log(charCount(string))

// let arr1 = [1,2,3,2]
// let arr2 = [9,1,4,4]
//
// let arr3 = 'scoop'
// let arr4 = 'csoop'
//
// // console.log(frequecyCounter(arr1, arr2))
// console.log(anagramLoop(arr3, arr4))


// import {sumZero} from "./patterns/multiplemiddles.js";
//
// let sauceArr = [-3,-2,1,0,2,3,4]
//
// console.log(sumZero(sauceArr))


// import {countUniqueelemues} from "./patterns/multiplemiddles.js";
//
// let countArr = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
// console.log(countUniqueelemues(countArr))

// import {slidingWindow} from "./patterns/slidingWindow.js";
//
// let countArr = [33, 4, 55, 34, 21, 2, 92, 9]
// console.log(slidingWindow(countArr, 4))


//
// import {sameFrequency} from "./patterns/frequencyCounter.js";
//
// console.log(sameFrequency(22333, 3322))


// import {areThereDuplicates} from "./patterns/frequencyCounter.js";
//
// console.log(areThereDuplicates(1, 4, 5, 2, 3))


// import {areThereDuplicates} from "./patterns/multiplemiddles.js";
//
// console.log(areThereDuplicates(3, 4, 5, 2, 3))

// import {averagePair} from "./patterns/multiplemiddles.js";
//
// console.log(averagePair([1,3,3,5,7,10,12,19],8))

// import {isSubsequence} from "./patterns/multiplemiddles.js";
//
// console.log(isSubsequence('cancelculture','canultureisbad'))

// import {maxSubarraySum} from "./patterns/slidingWindow.js";
//
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))

// import {minSubArray} from "./patterns/slidingWindow.js";
//
// console.log(minSubArray([3,-2,7,-4,1,-1,4,-2,1],2));

// import {findLongestSubstring} from "./patterns/slidingWindow.js";
//
// console.log(findLongestSubstring('thisishowwedoit'))


/**
 * Recursion
 */

// import {countDown} from "./recursion/recursion.js";
//
// countDown(22)

// import {sumRange} from "./recursion/recursion.js";
//
// console.log(sumRange(3))

// import {factorial} from "./recursion/recursion.js";
//
// console.log(factorial(4))


// import {collectOddelemues} from "./recursion/recursion.js";
//
// console.log(collectOddelemues([1,3,3,4,5,6,7,8]))

// import {power} from "./recursion/recursion.js";
//
// console.log(power(2,4))

// import {factorial2} from "./recursion/recursion.js";
//
// console.log(factorial2(3))

// import {productOfArray} from "./recursion/recursion.js";
//
// console.log(productOfArray([2, 2, 2, 2]))

// import {recursiveRange} from "./recursion/recursion.js";
//
// console.log(recursiveRange(10))

// import {fib} from "./recursion/recursion.js";
//
// console.log(fib(4))

// import {searchingAlgos} from "./searchingAlgos/searchingAlgos.js";
//
// console.log(searchingAlgos([1, 2, 3, 4, 5], 4))
//
// import {binarySearch} from "./searchingAlgos/searchingAlgos.js";
//
// console.log(binarySearch([0,2,3,4,5,6], 2))

// import {bubbleSort} from "./sortingAlgos/bubbleSort.js";
//
// console.log(bubbleSort([44,22,34,82,13,55]))

// import {selectionSort} from "./sortingAlgos/selectionSort.js";
//
// console.log(selectionSort([22,44,33,89,19,10]))


// import {insertionSort} from "./sortingAlgos/intertionSort.js";
//
// console.log(insertionSort([22,44,33,89,19,10]))

// import {merge} from "./sortingAlgos/mergeSort.js";
//
// console.log(merge([1, 3, 4, 5], [2, 6, 7, 8, 9, 10, 11]))

// import {mergeSort} from "./sortingAlgos/mergeSort.js";
//
// console.log(mergeSort([33,44,3,22,6,77,88,4]))


// import {pivot} from "./sortingAlgos/quickSort.js";
//
// console.log(pivot([44,54,32,11,9,3,44]))


// import {quickSort} from "./sortingAlgos/quickSort.js";
//
// console.log(quickSort([44,54,32,11,9,3,44]))
//
// import {radixSort} from "./sortingAlgos/radixSort.js";
//
//
// console.log(radixSort([10, 22, 33, 44444, 5553, 2233333333, 44444]))

/**
 * Singly Linked List
 */

// import {SinglyLinkedList} from "./dataStructures/singleLinkedList.js";
//
// let list = new SinglyLinkedList()
//
// list.push("yeets")
// list.push("it")
// list.push("!")
//
// // list.traverse()
// console.log(list)

// Adding items to the list
// list.pop()
// list.pop()
// list.pop()
// console.log(list)

// Removing items from the front of the list
// list.shift()
// list.shift()
// list.shift()
// console.log(list)

//Adding items to the front w/ unshift
// list.unshift("shall")
// list.unshift("Hal")
// console.log(list)
// list.traverse()

//Getting items w/ get()
// console.log(list.get(2))

//Setting items w/ set()
// console.log(list.set("derp",0))
// list.traverse()

//Inserting items w/ insert()
// list.insert("Derp", 3)
// list.traverse()

//Removing jazz w/ remove()
// console.log(list.remove(2))
// list.traverse()

//Reversing the list
// list.reverse()
// list.print()


/**
 * Doubly Linked List
 */

// import {DoublyLinkedList} from "./dataStructures/doubleLinkedList.js";
//
// let list = new DoublyLinkedList()
//
// list.push("Derp")
// list.push("yeets")
// list.push("it")
// list.push("!")
// console.log(list)
//
// // list.pop()
// // list.shift()
// //list.unshift('Kakkaka')
// // list.set(1, "Herk")
// // console.log(list.insert(2, "Yerp"))
// console.log("This was removed!", list.remove(1))
// console.log(list)

// import {Stack} from "./dataStructures/stacks.js";
//
// /**
//  * Stacks
//  */
// let stack = new Stack()
// stack.push(3)
// stack.push("howdy")
// stack.push("beans")
// stack.pop()
// console.log(stack)

// import {Queue} from "./dataStructures/queues.js";
//
// /**
//  * Queues
//  */
//
// let queue = new Queue()
// queue.enqueue(33)
// queue.enqueue(22)
// queue.enqueue(11)
// queue.deqeueue()
// console.log(queue)

import {BinarySearchTree} from "./dataStructures/binarySearchTrees.js";

/**
 * Binary Search Trees
 */

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(2002)
tree.insert(4)
tree.insert(1)
tree.insert(55)
// console.log(tree)
console.log(tree.find(11))