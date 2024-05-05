// 4.1.1 Extended Parameter Handling – Default parameter values

// ES6 introduced default parameter values for functions, simplifying parameter handling.
// Default parameters allow us to define fallback values if an argument is not provided.

// Example:

function greetings(name = 'anonymous') {
    console.log(`Hi, ${name}!`)
}

greetings(); // Output: Hi, anonymous!
greetings('Prabhat'); // Output: Hi. Alice!

// If no argument is provided, the default value 'anonymous' is used for the parameter.

// Default parameters can be used for multiple parameters:
function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}

test(); // Output: a: undefined, b: 1, c: undefined, d: 2
test(100); // Output: a: 100, b: 1, c: undefined, d: 2
test(100, 200); // Output: a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // Output: a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // Output: a: 100, b: 200, c: 300, d: 400

// Default parameter values provide flexibility and simplify function calls.
