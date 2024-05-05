// 4.1.4 Simulating named parameters

// Named parameters allow passing arguments to a function by parameter names, not just order.
// While JavaScript doesn't have named parameters explicitly, we can simulate them easily.

// Example:

function getFile({url, name, mime}) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // some logic for connecting and downloading the file
}

let parameters = {name: 'test.json', url: 'https://localhost/files', mime: 'application/json'};
getFile(parameters); // Output: url: https://localhost/files, name: test.json, mime: application/json

getFile({mime: 'image/jpeg', url: 'http://test.com/rest', name: 'id.jpg'});
// Output: url: http://test.com/rest, name: id.jpg, mime: image/jpeg

// In the function, parameters are expected to be fields of a single object passed as an argument.
// The order of fields doesn't matter; they are accessed by their names inside the function.

// Simulating named parameters improves code readability and flexibility in function calls.