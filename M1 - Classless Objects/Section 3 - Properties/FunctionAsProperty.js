/*
A function that is the property of an object will be called a method.

Just as the properties of objects describe their characteristics, methods can be treated as their characteristic behavior, or ways of changing the state of an object.

As an example, let’s consider an object describing a point on the surface. We’ll only describe its two properties, which determine its position, that is, the position x and y. To this we’ll add two methods, 𝗺𝗼𝘃𝗲𝗩𝗲𝗿𝘁𝗶𝗰𝗮𝗹𝗹𝘆 and 𝗺𝗼𝘃𝗲𝗛𝗼𝗿𝗶𝘇𝗼𝗻𝘁𝗮𝗹𝗹𝘆.
*/
//Example:
let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
}
console.log(point.x);    // -> 0
point.moveHorizontally(30);
console.log(point.x);    // -> 30

/*
In the example, we have a new keyword, 𝘁𝗵𝗶𝘀. In simple terms, it indicates the object we are in.
*/