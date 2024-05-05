// Topic: 3.1.24 Time specification with date string
/* Concepts:
- The Date constructor can accept date and time information in the form of a string.
- There are various date and time formats that JavaScript will try to interpret, leading to potential ambiguity and unexpected results.
- The ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sss) is recommended for unambiguous date and time representation.
*/

// Code:
// Example demonstrating time specification with date string
let date1 = new Date("2023-12-19");
let date2 = new Date("2023-12-19T10:20:00");
let date3 = new Date("2023-12-19T10:20:00Z");

console.log(date1.toLocaleString()); // Output: 19/12/2023, 00:00:00
console.log(date2.toLocaleString()); // Output: 19/12/2023, 10:20:00
console.log(date3.toLocaleString()); // Output: 19/12/2023, 11:20:00 (adjusted for local time from UTC+0)

// Additional examples with different date and time formats
let date4 = new Date("Mon Aug 12 2023 10:00:00");
let date5 = new Date("Mon August 12 2023 10:00");
let date6 = new Date("Aug 12 2023 10:00:00");
let date7 = new Date("12 August 2023, 10:");
let date8 = new Date("8.12.2023");
let date9 = new Date("08/12-2023, 10:00");
let date10 = new Date("2023, 10:00");
let date11 = new Date("2023 August-12, 10:00");
let date12 = new Date("8.12.2023 GMT+0400");
let date13 = new Date("Mon Aug 12 2023 10:00:00 UTC-4");

console.log(date4.toLocaleString()); // Output: 12/08/2023, 10:00:00
console.log(date5.toLocaleString()); // Output: 12/08/2023, 10:00:00
console.log(date6.toLocaleString()); // Output: 12/08/2023, 10:00:00
console.log(date7.toLocaleString()); // Output: 12/08/2023, 00:00:00 (time defaulting to 00:00:00)
console.log(date8.toLocaleString()); // Output: 12/08/2023, 00:00:00 (time defaulting to 00:00:00)
console.log(date9.toLocaleString()); // Output: 12/08/2023, 10:00:00
console.log(date10.toLocaleString()); // Output: 01/01/2023, 10:00:00 (missing month and day default to 01/01)
console.log(date11.toLocaleString()); // Output: 01/08/2023, 10:00:00 (missing month default to 01)
console.log(date12.toLocaleString()); // Output: 08/12/2023, 14:00:00 (adjusted for local time from GMT+0400)
console.log(date13.toLocaleString()); // Output: 12/08/2023, 14:00:00 (adjusted for local time from UTC-4)