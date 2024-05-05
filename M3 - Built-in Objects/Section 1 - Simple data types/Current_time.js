// Topic: 3.1.22 Current time
/* Concepts:
- The Date constructor can be called without arguments to get the current time.
- Using Date.now() is a practical way to get the current timestamp.
- Passing a timestamp to the Date constructor creates a Date object representing that time.
*/

// Code:
// Example demonstrating getting the current time with Date constructor
let nowObj = new Date();
console.log(nowObj.toLocaleString()); // Output: Current date and time in local time zone

// Example using Date.now() to get the current timestamp
let now = Date.now(); // current timestamp
let nowObj2 = new Date(now);
console.log(`now : ${typeof now} : ${now}`); // Output: now : number : <current timestamp>
console.log(`now : ${typeof nowObj2} : ${nowObj2}`); // Output: now : object : <current Date object>