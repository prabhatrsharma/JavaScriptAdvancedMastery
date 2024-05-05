// 1.9.4 new Object()

/*
The Object constructor is used to create an empty object. It is a generic constructor and can be used with the new keyword.

Example creating an empty object with new Object():
*/

let emptyObject = new Object();
console.log(emptyObject.constructor.name); // Output: "Object"

/*
This creates an empty object with properties and methods inherited from the Object constructor.

It's important to note that using {} or new Object() to create empty objects achieves the same result.

Let's move on to the next topic: 1.9.5 Object.create
*/
