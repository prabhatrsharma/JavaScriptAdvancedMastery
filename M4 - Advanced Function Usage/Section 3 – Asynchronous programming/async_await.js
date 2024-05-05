// 4.3.5 async/await – A different approach to promises
// JavaScript allows you to use promises in another way, which looks a bit like synchronous programming.
// With this approach, we can avoid creating chains of promises which, especially at the beginning of your programming adventure, can cause some problems.
// For this purpose, we use the keywords async and await.

function newPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });
}

async function testAsync() {
    console.log('testAsync start');
    let resp = await newPromise();
    console.log(resp);
    console.log('testAsync end');
}

console.log('before testAsync ...');
testAsync();
console.log('... after testAsync');

// What’s happening? Well, first we display before testAsync ... in the console.
// The next step is to call the asynchronous function testAsync, which executes until it encounters the await keyword, displaying, among other things, testAsync start.
// When it’s called with the await keyword, the newPromise function creates a promise whose state is not set yet (pending).
// The interpreter then leaves the testAsync function, and continues with synchronous execution, displaying ... after testAsync in the console.
// The status of the promise changes to fulfilled and we return to the code execution located in the testAsync function after the line containing the word await.
// Then two more messages are displayed, including the value of resp.
// Note that resp is not a promise object but a value returned by the resolver after the promise state changes.

// Let's rewrite the example where we used the fetch method to retrieve data from the server, this time using the async and await keywords.

const value = 200;

async function getSquare(v) {
    const response = await fetch(`http://localhost:3000/json?value=${v}`);
    const data = await response.json();
    console.log(`server: ${v} * ${v} = ${data.square} (${data.time}ms)`);
}

getSquare(200);
console.log(`browser: ${value} * ${value} = ${value * value}`);

// The asynchronous function in this case is getSquare.
// Inside it, we call fetch, preceded by the await operator.
// As a result, we should receive the server response (it is no longer a promise).
// The next step is to call the json method of the response object (again we use the await operator).
// Only after receiving the response from the server and decoding it from JSON format does the console display a message with the received data.
// In the meantime, the part of the code placed behind the getSquare call is executed (i.e. the message with the calculations performed in the browser).

// What happens if one of the objects we are waiting for when using the await operator changes its state to rejected?
// Then an exception is thrown, and we have to handle it in a traditional way using the try ... catch statement.

function newPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('something bad happened')), 1000);
    });
}

async function testAsync() {
    try {
        let resp = await newPromise();
        console.log(resp);
    } catch(error) {
        console.log(`error: ${error.message}`)
    }
}

testAsync();