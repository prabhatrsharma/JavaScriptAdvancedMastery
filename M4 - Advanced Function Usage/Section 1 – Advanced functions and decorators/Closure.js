// 4.1.5 Closure

// A closure is a mechanism in JavaScript that binds a function to its environment, allowing access to outer scope variables even after the outer function has finished execution.

// Example:

// Global variable example:
let counter = 0; // global variable
function tickGlobal() {
    return ++counter;
}
console.log(tickGlobal()); // Output: 1
console.log(tickGlobal()); // Output: 2
console.log(tickGlobal()); // Output: 3

// Local variable example:
function tickLocal() {
    let counter = 0; // local variable
    return ++counter;
}
console.log(tickLocal()); // Output: 1
console.log(tickLocal()); // Output: 1
console.log(tickLocal()); // Output: 1

// Using closure to maintain state:
function getTick() {
    let counter = 10;
    return function () {
        return ++counter;
    }
}
let tickClosure = getTick();
console.log(tickClosure()); // Output: 11
console.log(tickClosure()); // Output: 12
console.log(tickClosure()); // Output: 13

// Closures are useful for maintaining state, creating private variables, and implementing certain design patterns.