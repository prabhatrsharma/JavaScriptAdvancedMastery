// 4.1.3 The spread operator

// The spread operator allows us to pass an array as individual arguments to a function.
// It reverses the behavior of rest parameters, where multiple arguments are treated as an array.

// Example:

function getFile(url, name, mime) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // some logic for connecting and downloading the file
}

let parameters = ['https://localhost/files', 'test.json', 'application/json'];
getFile(...parameters); // Output: url: https://localhost/files, name: test.json, mime: application/json

// The spread operator (...) breaks the array into individual elements when passing it to a function.

// This technique simplifies passing multiple arguments stored in an array to a function.