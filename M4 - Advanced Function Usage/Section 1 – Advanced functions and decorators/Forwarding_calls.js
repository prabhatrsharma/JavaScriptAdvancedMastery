// 4.1.7 Forwarding calls (apply, call, bind)

// JavaScript provides methods like apply, call, and bind to handle the 'this' context and argument passing in functions.

// Example using call method:
'use strict';
let point1 = {
    x: 100,
    y: 100
}
function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.call(point1, 'coordinates');

// Example using apply method:
'use strict';
let point2 = {
    x: 100,
    y: 100
}
function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.apply(point2, ['coordinates']);

// Example using bind method:
'use strict';
let point3 = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
let showCoordinates = showPoint.bind(point3, 'coordinates');
showCoordinates(); // -> coordinates [100:200]