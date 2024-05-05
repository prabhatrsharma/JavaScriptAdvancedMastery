// Topic: 3.1.10 The String constructor
/* Concepts:
- The String constructor is used during autoboxing to treat string primitives as objects.
- It can also be used explicitly to create new string objects or convert other primitives to strings.
- The String constructor has a prototype property called length, which indicates the number of characters in a string.
- When working with the length property, it's important to ensure that the variable being accessed is indeed a string to avoid errors.
- Logical operators like && can be used to check both if a variable exists and if it has a non-zero length before accessing its properties.
*/

// Code:
// Example demonstrating the use of the length property of the String constructor
let name = "Bob";
console.log(name.length); // -> 3
console.log("Alice".length); // -> 5
console.log("".length); // -> 0

// Example demonstrating the use of logical operators to check for string existence and non-zero length
let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i<strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}
// Output: 'ab', 'cd ef'