// 4.1.9 Decorating functions (wrappers, higher order functions)

// Functions that either take another function as an argument or return a function as a result are called higher-order functions. Among these, a specific group known as decorating functions or decorators, play a key role in modifying the functionality of other functions.

// Consider the following example of a decorator function:

let funA = function(a, b) {
    return a + b;
};

let decor = function(fn) {
    return function(arg1, arg2) {
        let result = fn(arg1, arg2);
        console.log(`result ${result}`);
        return result;
    };
};

let funB = decor(funA);

console.log(funA(3, 4)); // Output: 7
funB(3, 4); // Output: result 7

// In this example, funA is a simple function that adds two numbers. The decor function acts as a decorator, creating a new function funB which includes the functionality of funA along with additional logging.

// Decorators are particularly useful when we want to enhance existing functions without modifying their core logic directly. Let's look at a more practical use case involving a factorial function:

let factorial = function(n) {
    return n > 1 ? factorial(n - 1) * n : 1;
};

let decorator = function(fn) {
    let results = new Map();

    return function(n) {
        let result = results.get(n);

        if (!result) {
            result = fn(n);
            results.set(n, result);
            console.log(`... calc ${n} -> ${result}`);
        } else {
            console.log(`... found ${n} -> ${result}`);
        }
        return result;
    };
};

let factorial2 = decorator(factorial);

// Now, let's see how the factorial2 function works with cached results:

factorial2(2); // Output: ... calc 1 -> 1, ... calc 2 -> 2
factorial2(2); // Output: ... found 2 -> 2
factorial2(3); // Output: ... found 2 -> 2, ... calc 3 -> 6
factorial2(10); // Output: ... found 3 -> 6, ... calc 4 -> 24, ... calc 5 -> 120, ... calc 6 -> 720, ... calc 7 -> 5040, ... calc 8 -> 40320, ... calc 9 -> 362880, ... calc 10 -> 3628800
factorial2(8); // Output: ... found 8 -> 40320
factorial2(10); // Output: ... found 10 -> 3628800

// As demonstrated, the decorator efficiently caches results of factorial computations, avoiding redundant calculations for the same arguments.

// Decorators are a powerful tool in JavaScript, offering ways to enhance and modify functions without altering their original code, thereby improving code reusability and maintainability.