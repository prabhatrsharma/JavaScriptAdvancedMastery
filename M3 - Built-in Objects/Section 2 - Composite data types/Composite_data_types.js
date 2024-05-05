// Topic: 3.2.1 Composite data types
/* Concepts:
- Composite data types in JavaScript are structures that can store multiple values of different types in various forms.
- These data types differ in how values are identified, accessed, or organized, and they are typically dynamic, allowing changes in both values and size.
*/

// Code:
// Example demonstrating selected composite data types in JavaScript
// 1. Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // Output: 'apple'
fruits.push('grapes'); // Add 'grapes' to the end
console.log(fruits.length); // Output: 4

// 2. Objects
let person = {
    name: 'Prabhat Sharma',
    age: 19,
    isStudent: true
};
console.log(person.name); // Output: 'Prabhat Sharma'
person.city = 'Mumbai'; // Add a new property
console.log(person.city); // Output: 'Mumbai'

// 3. Maps
let myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a')); // Output: 1

// 4. Sets
let mySet = new Set([1, 2, 3, 1, 2]);
console.log(mySet.size); // Output: 3 (ignores duplicates)