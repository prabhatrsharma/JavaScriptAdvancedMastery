// Topic: 3.2.3 Creating an array

/* Concepts:
- Arrays in JavaScript can be created using array literals (square brackets) or the Array constructor.
- The Array constructor can be used explicitly or implicitly, and it offers different ways to create arrays based on the arguments passed.
- Accessing elements in an array is done using their index, starting from 0.
- Arrays have a length property that indicates the number of elements they contain.
*/

// Code:
// Example demonstrating different ways to create arrays in JavaScript
let array1 = []; // Empty array
let array2 = [2, 4, "six"]; // Array with elements
let array3 = new Array(); // Empty array using Array constructor
let array4 = new Array(2); // Array of length 2 with undefined elements
let array5 = new Array(2, 4, "six"); // Array with elements using Array constructor
let array6 = new Array("2"); // Array with one element

console.log(array2[0]); // Output: 2 (accessing first element of array2)
console.log(array5[2]); // Output: 'six' (accessing third element of array5)
console.log(array5[5]); // Output: undefined (accessing non-existing index in array5)

console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // Output: array2 : object : true : 3
console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // Output: array5 : object : true : 3