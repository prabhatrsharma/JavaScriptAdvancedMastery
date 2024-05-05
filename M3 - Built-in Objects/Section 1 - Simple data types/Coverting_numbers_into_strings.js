// Topic: 3.1.6 Converting numbers into different string formats
/* Concepts:
- The Number prototype methods toExponential, toFixed, and toLocaleString allow converting numbers into different string formats.
- toExponential converts a number to exponential notation with a specified number of decimal places.
- toFixed rounds a number to a specified number of decimal places and returns a string representation.
- toLocaleString returns a string representation of a number formatted according to the language and region specified or the system default.
*/

// Code:
// Example demonstrating usage of Number prototype methods toExponential, toFixed, and toLocaleString
let a = 12345;
console.log(a.toExponential());   // -> 1.2345e+4
console.log(a.toExponential(1));  // -> 1.2e+4

let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550
let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6

let nr = 123456.789;
console.log(nr.toLocaleString("en-GB")); //-> 123,456.789
console.log(nr.toLocaleString("fr-FR")); //-> 123·456,789
console.log(nr.toLocaleString("de-DE")); //-> 123.456,789
console.log(nr.toLocaleString("ar-EG")); //-> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR"
})); //-> 123.456,79 €
console.log(nr.toLocaleString());
