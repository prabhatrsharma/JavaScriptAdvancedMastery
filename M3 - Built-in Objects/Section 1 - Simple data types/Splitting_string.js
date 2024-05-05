// Topic: 3.1.13 Splitting the string
/* Concepts:
- The split method is used to split a string into substrings based on a specified separator.
- The split method returns an array of substrings.
- The original string remains unchanged after using split.
*/

// Code:
// Example demonstrating the split method
let ipAddressStr = "127.0.0.1";
let ipParts = ipAddressStr.split("."); // Split the IP address string using "." as the separator
console.log(ipParts); // Output: ["127", "0", "0", "1"]
console.log(ipParts[0]); // Output: 127