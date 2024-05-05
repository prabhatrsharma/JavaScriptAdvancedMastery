// Topic: 3.1.20 Date
/* Concepts:
- The Date constructor in JavaScript is used to work with dates and times.
- It stores a timestamp, which represents the number of milliseconds that have passed since January 1, 1970 00:00:00:00 UTC (Unix Epoch).
- Time zones play a crucial role in determining local time from timestamps, as the same timestamp can represent different local times in different time zones.
*/

// Code:
// Example demonstrating the Date constructor and timestamps
let currentDate = new Date(); // Creates a new Date object with the current date and time
console.log(currentDate); // Output: Current date and time in your local time zone

// Getting the timestamp (milliseconds since Unix Epoch)
let timestamp = currentDate.getTime();
console.log(timestamp); // Output: Number of milliseconds since January 1, 1970 UTC

// Creating a Date object from a timestamp
let anotherDate = new Date(timestamp);
console.log(anotherDate); // Output: Date and time corresponding to the given timestamp

// Using UTC methods to work with UTC time
console.log(currentDate.toUTCString()); // Output: Current date and time in UTC
