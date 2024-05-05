// 4.3.2 Why do we need asynchronous techniques?

// Synchronous vs. Asynchronous Execution
// Synchronous execution waits for each task to complete before starting the next.
// Asynchronous execution allows tasks to start before the previous one finishes.

// Synchronous Example
let showInfo = result => {
    let info = "the arguments are equal";
    if(result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}
let compareSync = (a, b, fn) => {
    let r = a - b;
    fn(r);
}
console.log("start");
compareSync(10, 5, showInfo);
console.log("end");

// Asynchronous Example
let compareAsync = (a, b, fn) => {
    let r = a - b;
    setTimeout(fn, 1000, r); // Call the function after 1000ms
};
console.log("start");
compareAsync(10, 5, showInfo);
console.log("end");

// Output:
// Synchronous Example:
// start
// the first argument is greater
// end
// Asynchronous Example:
// start
// end
// the first argument is greater

// Explanation:
// In the synchronous example, tasks execute sequentially.
// In the asynchronous example, setTimeout causes delayed execution of the callback function, showing asynchronicity.