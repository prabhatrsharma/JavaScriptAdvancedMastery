// Topic: 3.3.10 The exec method

/* Concepts:
- The exec method of the RegExp object is used to search for a match in a string based on a regular expression pattern.
- If a match is found, exec returns an array with information about the match, including the matched substring and its index in the original string.
- If no match is found, exec returns null.
*/

// Code:

let re = /c.t/;
console.log(re.exec("haircut")); // Output: ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // Output: null