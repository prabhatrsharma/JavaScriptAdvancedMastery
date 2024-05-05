// 4.1.8 First-class functions

// In our previous discussion, we explored the concept of first-class functions in JavaScript.

// Let's revisit and dive deeper into what this idea entails.

// First-class functions, also referred to as first-class citizens, describe the capability of functions in JavaScript to be treated as variables. Essentially, this means that functions can be:

// 1. Stored in Variables: You can assign a function to a variable, making the function itself a value that can be manipulated and used elsewhere in your code.

let sum = function(a, b) {
    return a + b;
};
console.log(sum(10, 20)); // Output: 30

// This method of defining functions is known as a function expression. Here, an anonymous function (without a name between the function keyword and the parameters) is assigned to the variable sum.

// 2. Passed as Arguments: Functions can be passed as arguments to other functions, allowing for dynamic and flexible behavior in your code.

function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}
console.log(executeOperation(sum, 10, 20)); // Output: 30

// In the executeOperation function, we expect another function (operation) to be passed as the first parameter. We then call this function with the provided arguments.

// 3. Returned by Functions: Functions can also be returned by other functions, leading to powerful and modular code structures.

function getMultiplyBy(multiplier) {
    return function(a) {
        return a * multiplier;
    };
}
let multiplyBy3 = getMultiplyBy(3);
console.log(multiplyBy3(2)); // Output: 6
console.log(getMultiplyBy(5)(10)); // Output: 50

// In this example, getMultiplyBy returns a function that multiplies any number by the specified multiplier. The returned function can then be used independently or stored in a variable for reuse.

// First-class functions in JavaScript offer tremendous flexibility and enable powerful programming paradigms such as functional programming and callback-based architectures. They allow for the creation of reusable, modular, and dynamic code structures, making JavaScript a versatile and expressive language.