/*
Code Challenge #5
Scenario
Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).

Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.
*/

let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;
    if (retVal) {
        for (let property in src) {
            if (src.hasOwnProperty(property) && trg.hasOwnProperty(property)) {
                if (typeof src[property] === 'object' && typeof trg[property] === 'object') {
                    retVal = deepComp(src[property], trg[property]);
                } else {
                    retVal = src[property] === trg[property];
                }
            } else {
                retVal = false; // Properties don't match
            }
            if (!retVal) break;
        }
    }
    return retVal;
}

// Test the deepComp function
let obj1 = {
    a: 1,
    b: { c: 2 },
    d: [3, 4]
};

let obj2 = {
    a: 1,
    b: { c: 2 },
    d: [3, 4]
};

let obj3 = {
    a: 1,
    b: { c: 2 },
    d: [3, 5] // Different value here
};

console.log(deepComp(obj1, obj2)); // true (objects are equal)
console.log(deepComp(obj1, obj3)); // false (objects are not equal)