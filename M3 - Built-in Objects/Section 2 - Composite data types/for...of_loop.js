// Topic: 3.2.31 The for ... of loop
/* Concepts:
- The for ... of loop is a universal mechanism in JavaScript for iterating through collections such as arrays, sets, and maps.
- It provides an intuitive and concise way to iterate through elements of a collection without needing manual index management.
*/

// Code:
let petsArray = ["cat", "dog", "hamster"];

// Using for...of loop with an array
for (let pet of petsArray) {
    console.log(pet); // Output: cat -> dog -> hamster
}

let petsSet = new Set(["cat", "dog", "hamster"]);

// Using for...of loop with a set
for (let pet of petsSet) {
    console.log(pet); // Output: cat -> dog -> hamster
}

let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);

// Using for...of loop with a map
for (let pet of petsMap) {
    console.log(pet); // Output: ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // Output: cats -> dogs -> hamsters
}

// Explanation: The for...of loop is used to iterate through elements of an array, set, or map without manual index handling.
