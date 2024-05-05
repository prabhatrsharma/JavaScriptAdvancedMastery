/*Code Challenge #2
Scenario
Write a decorator named myDecorator that will store the arguments of the decorated function call.

If the function has already been called with these arguments, an appropriate message should appear in the console containing, among other things, the values of those arguments.

Note – the function can be called with any number of arguments, so use rest arguments for this purpose.*/

let myDecorator = function (fn) {
    let cache = [];
    let included = function (...args) {
        return cache.some((cachedArgs) => {
            return args.length === cachedArgs.length && args.every((arg, index) => arg === cachedArgs[index]);
        });
    };
    return function (...args) {
        if (included(...args)) {
            console.log(`Arguments already used: ${JSON.stringify(args)}`);
        } else {
            cache.push(args);
        }
        fn(...args);
    };
};

// Usage example:
const decoratedFunction = myDecorator((a, b, c) => {
    console.log(`Called with arguments: ${a}, ${b}, ${c}`);
});

decoratedFunction(1, 2, 3); // Output: Called with arguments: 1, 2, 3
decoratedFunction(4, 5, 6); // Output: Called with arguments: 4, 5, 6
decoratedFunction(1, 2, 3); // Output: Arguments already used: [1,2,3]