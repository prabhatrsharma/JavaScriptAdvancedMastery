// 1.9.5 Object.create

/*
Object.create is a method used to create a new object based on an existing object. 
The existing object serves as the prototype of the new object. 

When used with null as an argument, it creates an object without a prototype.

Example creating a really empty object with Object.create(null):
*/

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor); // Output: "undefined"

/*
In this case, undefined appears on the console, indicating that there is no constructor property in reallyEmptyObject.

Creating objects without a prototype should be done with caution and understanding, as it may have unexpected consequences. It's generally recommended to create objects using more conventional methods like factories, constructors, object literals, or classes.

Let's move on to the next topic: 1.9.6 Class
*/
