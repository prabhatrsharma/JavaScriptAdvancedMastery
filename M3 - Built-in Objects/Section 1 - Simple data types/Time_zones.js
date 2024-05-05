// Topic: 3.1.21 Time zones and other tricks
/* Concepts:
- The Date constructor in JavaScript can be used to work with dates and times.
- Timestamps represent the number of milliseconds that have passed since January 1, 1970 00:00:00:00 UTC (Unix Epoch).
- getTimezoneOffset method returns the time difference in minutes between UTC+0 and the local time zone.
- toLocaleString method returns a string representing the date and time in local time.
- toISOString method returns a string representing the date and time in UTC time (ISO format).
- toUTCString method returns a string representing the date and time in UTC time.
*/

// Code:
// Example demonstrating time zones and other tricks with Date constructor

// Experiment in Reykjavík (UTC+0)
let date1 = new Date(0);
let date2 = new Date(1000 * 60 * 60 * 10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

// Experiment in Berlin (UTC+1)
console.log(date2.getTimezoneOffset()); // -> -330
console.log(date2.toLocaleString()); // -> 1/1/1970, 3:30:00 pm
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

// Create Date objects using ISO 8601 string format
let date3 = new Date("2002-12-19T04:10:00.000");
let date4 = new Date("2004-08-24T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 19/12/2002, 4:10:00 am
console.log(date3.toISOString()); // -> 2002-12-18T22:40:00.000Z
console.log(date3.toUTCString()); // -> Wed, 18 Dec 2002 22:40:00 GMT
console.log(date4.toLocaleString()); // -> 25/8/2004, 1:50:00 am
console.log(date4.toISOString()); // -> 2004-08-24T20:20:00.000Z
console.log(date4.toUTCString()); // -> Tue, 24 Aug 2004 20:20:00 GMT
console.log(date3.getTime()); // -> 1040251200000
console.log(date4.getTime()); // -> 1093378800000
console.log(date4.getTime() - date3.getTime()); // -> 53127600000