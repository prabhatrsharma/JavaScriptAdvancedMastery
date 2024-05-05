// Topic: 3.1.23 Time specification with individual components
/* Concepts:
- The Date constructor can accept individual components representing the year, month, day, hour, minutes, seconds, and milliseconds.
- The year and month are mandatory, while other components not provided will default to the lowest possible values.
- Months are zero-based, so January is 0, February is 1, and so on.
- The time specified using individual components is interpreted as local time.
*/

// Code:
// Example demonstrating time specification with individual components
let date1 = new Date(2023, 11); // December 1, 2023, 12:00:00
let date2 = new Date(2023, 11, 19); // December 19, 2023, 12:00:00
let date3 = new Date(2023, 11, 19, 4); // December 19, 2023, 4:00:00
let date4 = new Date(2023, 11, 19, 4, 10, 14); // December 19, 2023, 4:10:14

console.log(date1.toLocaleString()); // 1/12/2023, 12:00:00 am
console.log(date2.toLocaleString()); // 19/12/2023, 12:00:00 am
console.log(date3.toLocaleString()); // 19/12/2023, 4:00:00 am
console.log(date4.toLocaleString()); // 19/12/2023, 4:10:14 am
