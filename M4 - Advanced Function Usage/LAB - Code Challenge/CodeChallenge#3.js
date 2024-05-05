/*Code Challenge #3
Scenario
Write a getPromiseArray function that will take an array of any length as an argument.

The function should return an array of promises (one promise for each element of the array passed as an argument) according to the following scheme:

if the array element is a positive integer, then the promise should be fulfilled after a time equal to this number and return the same number as its value;
otherwise the promise should be rejected immediately (generate a corresponding error using the Error object> */

let getPromiseArray = function (args) {
    let promises = args.map(arg =>
        new Promise(function (resolve, reject) {
            if (Number.isInteger(arg) && arg > 0) {
                setTimeout(() => resolve(arg), arg);
            } else {
                reject(new Error(`${arg} is not a positive integer`));
            }
        })
    );
    return promises;
};

// Example usage:
const promisesArray = getPromiseArray([1000, -5, 2000, 0, 3000]);
promisesArray.forEach((promise, index) => {
    promise.then(value => console.log(`Promise ${index + 1} resolved with value: ${value}`))
           .catch(error => console.error(`Promise ${index + 1} rejected with error: ${error.message}`));
});