// 4.3.3 Callback functions

// Example of using XMLHttpRequest with a callback function

const value = 200;
let request = new XMLHttpRequest();

// Callback function for handling the response
let responseLoaded = () => {
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    }
}

// Assigning the callback function to the 'load' event
request.onload = responseLoaded;

// Configuring the request
request.open('GET', `http://localhost:3000/json?value=${value}`);

// Sending the request
request.send();

console.log(`browser: ${value} * ${value} = ${value * value}`);