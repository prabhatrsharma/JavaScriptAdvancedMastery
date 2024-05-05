// Topic: 3.2.8 Walking through the array elements
/* Concepts:
- The forEach method in JavaScript is used to iterate over all elements of an array.
- It accepts a function as an argument and calls that function once for each element in the array.
- The function passed to forEach can take up to three arguments: item (the current element being processed), index (the index of the current element), and array (the array being traversed, though this argument is rarely used).
- Using forEach eliminates the need for traditional for or while loops when iterating over arrays, resulting in more concise and expressive code.
*/

// Code:
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];

// Using forEach with a Named Function
function toConsole(item, index) {
    console.log(`${index} : ${item}`);
}
array1.forEach(toConsole);

// Simplifying with an Anonymous Function
array1.forEach(function(item, index) {
    console.log(`${index} : ${item}`);
});

// Further Simplification using Arrow Function
array1.forEach((item, index) => {
    console.log(`${index} : ${item}`);
});
