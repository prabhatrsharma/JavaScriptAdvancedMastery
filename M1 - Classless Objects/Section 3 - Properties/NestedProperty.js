/*
If the property of an object is another object that has properties itself, then we are dealing with 𝗻𝗲𝘀𝘁𝗲𝗱 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀.
*/
// Example
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
console.log(test.obj.x); //-> 10
test.obj.y = 40;
console.log(test.obj.y); //-> 40