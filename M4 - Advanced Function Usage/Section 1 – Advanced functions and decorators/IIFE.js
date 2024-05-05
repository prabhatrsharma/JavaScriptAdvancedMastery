// 4.1.6 IIFE (Immediately Invoked Function Expression)

// An IIFE is a design pattern in JavaScript used for defining and immediately invoking a function.

// Example:

(function(){
    console.log('test IIFE');
})(); // Output: test IIFE

// IIFE prevents global variable pollution and allows local variable usage.

// Example with local variables:
(function () {
    let a = 10;
    let b = 20;
    let result;
    let sum = function (x, y) {
        return x + y;
    }
    result = sum(a, b);
    console.log(result); // Output: 30
})();

// console.log(result); // Output: Undefined ReferenceError: result is not defined

// IIFE is commonly used to encapsulate code, prevent global scope pollution, and separate logical modules.