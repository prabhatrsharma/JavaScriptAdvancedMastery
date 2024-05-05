// Example:
let nr = 10; 
let b = false; 
let str = "uno dos tres"; 
let arr = [10, 20, 30]; 
let obj = {
    x: 10, 
    y: 20
}; 
let fn = function(arg) {
    console.log(arg)
}; 
fn(123); //-> 123

/*
Object properties can be treated in exactly the same way as variables – you can assign values of any type to them.
Let's create a test object with properties that are equivalent to the variables from the previous example.
*/
// Example:
let test = {
    nr: 10, 
    b: false, 
    str: "Antah Asti Prarambh", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
fn: function(arg) {console.log(arg)} 
};
test.fn(123); //-> 123