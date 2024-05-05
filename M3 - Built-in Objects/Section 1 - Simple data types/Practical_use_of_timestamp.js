// Topic: 3.1.25 Practical use of a timestamp
/* Concepts:
- The getTime method of the Date object returns the number of milliseconds between the zero point and the time stored in the object.
- The valueOf method also returns a timestamp.
- Date.now is a static method that returns the current timestamp.
- These methods are often used to measure time durations, such as the execution time of a piece of code.
*/

// Code:
// Example demonstrating practical use of a timestamp
let date1 = new Date(2023, 12, 19, 4, 10, 0);
let date2 = new Date(2023, 12, 20, 4, 10, 0);
console.log(date2.getTime() - date1.getTime()); // Output: 86400000 (milliseconds in a day)

// Stopwatch example measuring code execution time
let startTime = Date.now();
for (let i = 0; i < 10000000; i++) {}
let endTime = Date.now();
console.log(endTime - startTime); // Output: Time in milliseconds for the loop execution