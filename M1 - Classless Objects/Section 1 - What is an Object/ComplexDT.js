/* Complex types, such as arrays or objects, are data collections – an ordered set of different values can be placed in one variable.
In the case of an array, individual values placed in a single variable are called elements, and are referred to by a number specifying their position in the collection (i.e. an index).
In JavaScript, indexes start at 0, so the first element will have an index of 0, the second an index of 1, and so on. As a reminder, arrays are most easily created using square brackets (although this is not the only way to create them).
*/
let a = [10, 20, "en to tre", true, 50];
a[4] = a[4] * 2;
console.log(a[0]);    // -> 10
console.log(a[2]);    // -> en to tre
console.log(a[4]);    // -> 100