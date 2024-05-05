// Topic: 3.1.9 What we already know about strings
/* Concepts:
- Strings in JavaScript can be enclosed in double quotes ("), single quotes ('), or backticks (`).
- Backticks allow for the use of placeholders inside strings, creating template literals.
- Template literals enable dynamic insertion of variable values into strings at runtime.
- Escape characters (\) can be used to include special characters inside strings without interpreting them as control characters.
*/

// Code:
// Example demonstrating the use of escape characters and alternative quote characters in strings
let warn1 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn2 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn3 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn4 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;

console.log(warn1); // -> Confirm ticket reservation for "Alien 10" movie.
console.log(warn2); // -> Confirm ticket reservation for "Alien 10" movie.
console.log(warn3); // -> Confirm ticket reservation for 'Alien 10' movie.
console.log(warn4); // -> warning: "Confirm ticket reservation for 'Alien 10' movie."
