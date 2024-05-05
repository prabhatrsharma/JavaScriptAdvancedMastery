// Topic: 3.2.12 Sorting
/* Concepts:
- The sort method is used to sort the elements of an array in place.
- It accepts a comparison function that determines the sorting order of the elements.
- The comparison function takes two parameters (first and second) representing elements being compared.
- Returning a negative value means first should precede second, positive means first should follow second, and 0 means they are equal in sort order.
*/

// Code:
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers[0]); // Output: 90 (original first element)
numbers.sort((first, second) => first - second);
console.log(numbers[0]); // Output: 10 (first element after sorting)

// The sort method sorts the numbers array in ascending order.