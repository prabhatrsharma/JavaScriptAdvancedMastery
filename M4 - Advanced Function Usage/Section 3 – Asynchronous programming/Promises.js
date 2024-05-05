// 4.3.4 Promises:
// - Represents completion (or failure) of an asynchronous operation.
// - Created using Promise constructor with resolve and reject functions.

let p = new Promise((resolve, reject) => {
    resolve(5); // Successful operation
});

p.then(value => {
    console.log(value); // Output: 5
}).catch(error => {
    console.log(`Error: ${error.message}`);
});

// Promise Methods:
// - Promise.all, Promise.any, Promise.race for handling multiple promises.

const value = 200;
fetch(`http://localhost:3000/json?value=${value}`)
.then(response => response.json())
.then(data => {
    console.log(`Result: ${data.square}`);
}).catch(error => {
    console.log(`Error: ${error.message}`);
});