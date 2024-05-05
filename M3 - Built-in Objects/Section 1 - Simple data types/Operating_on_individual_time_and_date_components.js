// Topic: 3.1.26 Operating on individual date and time components
/* Concepts:
- The Date constructor has prototype methods to operate on individual components of time stored in an object.
- Methods like getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, and getMilliseconds are used to retrieve specific date and time components.
- Methods like setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, and setMilliseconds are used to set new values for specific date and time components.
- There are also methods like toLocaleDateString and toLocaleTimeString to convert the time stored in an object into a string representing either the local date or the local time.
*/

// Code:
// Example demonstrating the use of selected methods operating on date and time components
let date = new Date("2023-12-19T04:10:00");
console.log(date.getMonth()); // Output: 11 (December is represented as 11 because months are counted from 0)
console.log(date.getDay()); // Output: 2 (Tuesday is represented as 2 because days of the week are counted from 0)
console.log(date.getDate()); // Output: 19 (day of the month)
console.log(date.getHours()); // Output: 4 (hour)
date.setHours(12);
console.log(date.getHours()); // Output: 12 (changed hour to 12)

console.log(date.toLocaleDateString()); // Output: 19/12/2023 (local date in the format MM/DD/YYYY)
console.log(date.toLocaleTimeString()); // Output: 12:10:00 PM (local time in 12-hour format with AM/PM)