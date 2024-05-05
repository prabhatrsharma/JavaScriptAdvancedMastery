// Topic: 3.1.2 Primitives and autoboxing
/* Concepts:
- Primitives are non-objective data types in JavaScript, including boolean, number, and string.
- Primitives do not have methods or properties directly associated with them.
- JavaScript provides special constructors (Boolean, Number, String) that act as classes for primitives.
- Autoboxing is a behavior of the JavaScript engine where primitives are temporarily converted to objects to access methods or properties.
- Autoboxing saves memory compared to using objects explicitly for primitives.
*/

// Code:
// Example with String constructor (autoboxing)
let strObj = new String("Do bats eat cats?");
console.log(typeof strObj); //-> object
console.log(strObj.length); // -> 17
let words = strObj.split(" ");
console.log(words[0]); // -> Do

// Example without explicit constructor (primitive usage)
let str = "Do bats eat cats?";
console.log(typeof str); //-> string
console.log(str.length); // -> 17
let words2 = str.split(" ");
console.log(words2[0]); // -> Do

/* 
  Note: Use primitives directly without explicit constructors (Boolean, Number, String) for better memory efficiency and readability.
  The JavaScript engine automatically handles autoboxing to objects when necessary.
*/