/*
We can use the Object.assign method for this. The method takes the target object as the first argument, to which the fields from other objects will be copied. The second and subsequent arguments (there is no limit to the number of objects) will be used as the source of the properties to be copied. If a property with the same name as the source object already exists in the target object, it will be overwritten with a new value (the target is overwritten with the source).
In the example below, we create two empty objects and then, using Object.assign, extend their properties.
*/
let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object - copying and asssigning point0 to point2
console.log(point2.x); // 10
console.log(point2.y); //20
console.log(point1 === point0); // true
console.log(point1 === point2); // false
/* As a result of the execution of our code, the variable point1 will contain a reference to the same object as point0, while point2 will be a new object to which the contents of point0 have been copied (i.e. it will contain the two fields x and y, with the values 10 and 20). */

/* The source objects, that is, the ones from which we’ll copy the properties, can be many.
All the properties of each source are copied to the target object, with the objects copied in the order in which they occur as arguments of the Object.assign method (from left to right).
The order is important for the same property names in several source objects. */

let point3 = {};
Object.assign(point3, point0, {z: 100});
console.log(point3.z); // 100
/* This time we create a point3 object with three fields: x, y, and z (with the values 10, 20, and 100 respectively). They’re copied from the point0 object and from the object placed directly as a call argument.
The list of source objects can, of course, be longer. As we indicated earlier, the properties with the same names are overwritten.
Continuing our example, let's check how overwriting properties works in practice. */

var point4 = {};
Object.assign(point4, point3, {z: 200, color: "red"});
console.log(point4.z);    // 200
/* Note that the z field occurs both in the point3 object (and has a value of 100) and in the object inserted as the last argument (which has a value of 200). As we indicated earlier, in this case, the value from the last, most right-handed argument "wins".*/

/*
𝗢𝗯𝗷𝗲𝗰𝘁.𝗮𝘀𝘀𝗶𝗴𝗻 𝘃𝘀. 𝗦𝗽𝗿𝗲𝗮𝗱 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿
𝗢𝗯𝗷𝗲𝗰𝘁.𝗮𝘀𝘀𝗶𝗴𝗻 returns a reference to the modified target object.
Example with Object.assign:
*/
// let pointZero = {x:10, y: 20 };
// let pointTwo = Object.assign({}, point0);
// let pointThree = Object.assign({}, point0, {z: 100});

// Alternative with the 𝘀𝗽𝗿𝗲𝗮𝗱 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿:
let pointZero = {x:10, y: 20 };
let pointTwo = { ...point0};
let pointThree = { ...point0, z: 100};
/* The spread operator spreads out object fields into a new object, allowing for easy object cloning and merging. */

/* 𝗦𝗵𝗮𝗹𝗹𝗼𝘄 𝘃𝘀. 𝗗𝗲𝗲𝗽 𝗖𝗹𝗼𝗻𝗶𝗻𝗴:
Shallow cloning copies only top-level properties, not nested objects.
Deep cloning copies all properties, including nested objects, creating independent copies.
JavaScript lacks built-in deep cloning, but a custom deepClone function can be created using recursion.
Sample Deep Cloning Function:
*/

let deepClone = function(obj) {
    let newObj = { ...obj };
    for (property in newObj) {
        if (typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
};