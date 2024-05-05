/* Since we already know that in the case of objects in variables and constants, only the references are stored, we should no longer be surprised by the results of object comparison. */
var point1 = {x: 10, y: 20};
var point2 = {x: 10, y: 20};
console.log(point1 === point2);     // false - 

/* As you probably expect, the result of the comparison will be false. The comparison concerns the references of two independent objects.

Although they have identical properties of the same values, this doesn’t change the fact that they’re different objects. Coming back to the example of a house – we can have two identical houses on the street, next to each other. Same plan, same construction, same decoration. All in all, the owners themselves have trouble distinguishing them. But their addresses are different, and we are comparing the addresses. 
⁡⁢⁣⁣S͟h͟o͟r͟t N͟o͟t͟e E͟x͟p͟l͟a͟n͟a͟t͟i͟o͟n: Object literal never equals to any other value but itself, but is used in a comparison. Be aware that this comparison is comparing references and not values.⁡
*/

let point3 = point1;
console.log(point1 === point3);     // true
/* This time the comparison will return true. We’ve written the content of point1 into the variable point3 (i.e. in both variables there is a reference to the same object).
We can easily check it by doing one more small experiment.*/
point3.z = 40;
console.log(point3.z);    // 40
console.log(point1.z);    // 40
console.log(point2.z);    // undefined
/* Using a reference stored in point3, we modify the object by adding a z field to it. The change is visible in the point3 and point1 variables, because they contain references to the same object. On the other hand, point2 points to a different object, and the action taken on point3 has no effect on it. */