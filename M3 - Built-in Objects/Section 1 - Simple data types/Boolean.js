// Topic: 3.1.3 Boolean
/* Concepts:
- Boolean is a constructor in JavaScript for creating boolean objects, corresponding to boolean primitive data type.
- Boolean constructor can be used to create boolean objects with or without arguments.
- Boolean objects have two prototype methods: toString() and valueOf().
- toString() method returns a logical value as a string, while valueOf() returns the logical value as a boolean primitive.
*/

// Code:
// Example using Boolean constructor and methods
let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${bool2}`); // -> bool2 : boolean : true

// Example using boolean primitives and valueOf method
let bool1 = false;
let str2 = bool1.toString();
let bool3 = bool1.valueOf();
console.log(`str2 : ${typeof str2} : ${str2}`); // -> str2 : string : false
console.log(`bool3 : ${typeof bool3} : ${bool3}`); // -> bool3 : boolean : false

// Example using Boolean constructor without new operator
let bool4 = Boolean(false);
let bool5 = Boolean(1);
let bool6 = Boolean("");
console.log(`bool4 : ${typeof bool4} : ${bool4}`); // -> bool4 : boolean : false
console.log(`bool5 : ${typeof bool5} : ${bool5}`); // -> bool5 : boolean : true
console.log(`bool6 : ${typeof bool6} : ${bool6}`); // -> bool6 : boolean : false

/* 
  Note: The Boolean constructor and its methods are rarely used directly in practice, as boolean primitives are sufficient for most operations.
*/