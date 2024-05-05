// Topic: 3.2.13 Reducing the array
/* Concepts:
- The reduce method goes through all elements of an array from left to right, calling a reducing function for each element.
- It differs from forEach in the parameters it takes and what the reducing function returns.
- The reducing function takes two parameters: accumulator (holds the result of the previous function call) and item (current array element).
- The initial value can be passed to the reduce method as an argument, preventing the skip of the first element.
*/

// Code:
let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers.reduce((accumulator, item) => accumulator + item);
console.log(sum); // Output: 380

// Explanation: The reduce method sums up all elements in the numbers array.

let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // Output: 1380

// Explanation: The reduce method sums up all elements in the numbers array starting with an initial value of 1000.

let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // Output: {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}

// Explanation: The reduce method converts the array into an object where keys are elements and values are their indexes.