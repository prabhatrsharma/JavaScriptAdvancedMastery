// Topic: 3.1.17 Padding
/* Concepts:
- The padStart method pads a string from the start with another string until it reaches the specified length.
- The padEnd method pads a string from the end with another string until it reaches the specified length.
- Padding is useful for formatting strings to a specific width or adding additional characters for alignment.
*/

// Code:
// Example demonstrating padStart and padEnd methods for padding strings
let numbers = [100, 5, 66];
for (let i = 0; i < numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}

// PadEnd example
let text = "Hello";
console.log(text.padEnd(10, '!')); // Output: Hello!!!!!
console.log(text.padEnd(3, '.')); // Output: Hello
console.log(text.padEnd(8)); // Output: Hello   
