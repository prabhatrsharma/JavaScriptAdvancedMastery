// Topic: 3.2.14 Reversing the order of the elements
/* Concepts:
- The reverse method reverses the order of elements in an array in place (modifies the original array).
- It doesn't require any arguments.
*/

// Code:
let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // Output: 10 (original first element)
numbers.reverse();
console.log(numbers[0]); // Output: 100 (first element after reversing)
numbers.reverse();
console.log(numbers[0]); // Output: 10 (first element after reversing again)

// Explanation: The reverse method reverses the order of elements in the numbers array.