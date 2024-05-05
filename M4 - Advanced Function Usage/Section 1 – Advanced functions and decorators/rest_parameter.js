// 4.1.2 The rest parameter

// Rest parameters allow us to treat multiple function arguments as an array, providing flexibility.
// Example:

function test(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}

test(100, 200, 300); // Output: length: 3, args: 100 200 300
test(100); // Output: length: 1, args: 100

// The rest parameter (denoted by ...) gathers all provided arguments into an array named args.

// Rules for rest parameters:
// - Only one rest parameter per function declaration.
// - Rest parameter must be the last parameter in the declaration.

// Example with normal parameters and rest parameter:
function test(firstArg, ...anotherArgs) {
    let msg = `first arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}

test(100, 200, 300); // Output: first arg: 100, length: 2, args: 200 300
test(100); // Output: first arg: 100, length: 0, args:

// Rest parameters offer a convenient way to handle varying numbers of arguments in functions.