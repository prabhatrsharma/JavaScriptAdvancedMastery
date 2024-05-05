/* Question 1
Multiple choice question
You have called the following statement:
What declaration should precede the statement so that the text Jeep appears in the console as a result of its execution?
*/
// console.log(car.make);
// // --> let car = {make: 'Jeep', model: 'Cherokee'};

/* Question 2
Multiple choice question
You have declared a circle object:
Select the correct way to display the value of the circle's x-coordinate so that the executed code results in the following console output: -10
*/
// let circle = {
//   center: {
//       x: -10,
//       y: 20
//   },
//   radius: 30
// }
// console.log(circle.center.x);
// // --> console.log(circle.center.x);

/* Question 3
Multiple choice question
You have declared a user object that has one property: full name
Which of the following is the correct way to refer to this property?
*/
let user = {
  "full name": "Mickey Mouse",
};
console.log(user["full name"]);
// --> user['full name']

/* Question 4
Multiple choice question
You have declared a geoposition object:
Select the correct way to display the values of all object properties so that the executed code results in the following console output: -30.110 and 120.027
*/
let geoposition = {
  lan: -30.11,
  lat: 120.027,
};
Object.keys(geoposition).forEach((key) => console.log(geoposition[key]));
// --> Object.keys(geoposition).forEach(key => console.log(geoposition[key]));

/* Question 5
Multiple choice question
You have declared two tree objects:
Which of the following comparisons will return true?
*/
let tree1 = {
  species: "oak",
};
let tree2 = {
  species: "oak",
};
console.log(tree1.species == tree2.species && tree1.species == tree2.species);
// --> ((tree1.species == tree2.species) && (tree1.species == tree2.species))

/* Question 6
Multiple choice question
Analyze the following code:
*/
let mountain1 = {
  name: "K2",
  range: "Himalayas",
};
let mountain2 = { ...mountain1, range: "Karakoram", height: 8611 };
mountain1.height = 8848;
console.log(`${mountain2.name} ${mountain2.range} ${mountain2.height}`);
// --> K2 Karakoram 8848

/* Question 7
Multiple choice question
There is one line of code missing in the code below:
*/
let user2 = {
  name: "Huck",
  surname: "Finn",
  show: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};
user2.show();
// --> show: function() {console.log(`${this.name} ${this.surname}`);}

/* Question 8
Multiple choice question
There is one line of code missing in the code below:
*/
let user3 = {
  _name: "Huck",
  _surname: "Finn",
  set name(name) {
    this._name = name;
  },
};
user3.name = "Huckleberry";
console.log(user3._name);
// --> set name(name) {this._name = name;}

/* Question 9
Multiple choice question
There is one line of code missing in the code below:
*/
let mountain = {
  name: "Everest",
  range: "Himalayas",
};
Object.freeze(mountain);
delete mountain.range;
mountain.name = "Lhotse";
mountain.height = 8516;
console.log(`${mountain.name} ${mountain.range} ${mountain.height}`);
// --> Object.freeze(mountain);

/* Question 10
Multiple choice question
There is one line of code missing in the code below:
*/
let getMountain = function (name, height) {
  return { name, height };
};
let mountain3 = getMountain("Lhotse", 8516);
console.log(`${mountain3.name} ${mountain3.height}`);
// --> return {name, height};

/* Question 11
Multiple choice question
There is one line of code missing in the code below:
*/
let Point = function (x, y) {
  this.x = x;
  this.y = y;
};
let point = new Point(100, 0);
let ColorPoint = function (color) {
  this.color = color;
};
ColorPoint.prototype = point;
let cpoint = new ColorPoint("green");
console.log(cpoint.x);
// --> this.x = x;

/* Question 12
Multiple choice question
Analyze the following code:
*/
let Mountain = class {};
// --> correct, because it is a declaration of an anonymous class and saves it to the variable Mountain (a class as a first-class citizen).

/* Question 13
Multiple choice question
You have defined a class Mountain whose constructor takes two arguments: name and range.
Which of the following is the correct way to create a mountain object of this class?
*/
let mountain4 = new Mountain("Manaslu", 8156);
// --> let mountain4 = new Mountain('Manaslu', 8156);

/* Question 14
Multiple choice question
Analyze the following code:
The mountain5 object has:
*/
class Mountain2 {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  setRange(range) {
    this.range = range;
  }
}
let mountain5 = new Mountain2("K2", 8611);
mountain5.setRange("Karakoram");
// --> has three properties: name, height and range.

/* Question 15
Multiple choice question
There is one line missing in the following code:
*/
class Tree {
  _species = "oak";
  set species(val) {
    this._species = val;
  }
}
let tree = new Tree();
tree.species = "maple";
console.log(tree._species);
// --> set species (val) { this._species = val;}

/* Question 16
Multiple choice question
There is one line missing in the following code:
*/
class First {
  hallo1() {
    return "First";
  }
}
class Second extends First {
  hallo2() {
    return "Second";
  }
}
let second = new Second();
console.log(`${second.hallo1()} ${second.hallo2()}`);
// --> class Second extends First {

/* Question 17
Multiple choice question
You have declared a Mountain class and created a mountain object from it:
*/
// class Mountain3 {
//   static className() { return 'Mountain'; }
// }
// let mountain6 = new Mountain3();
// console.log(mountain6.className());
// // --> Mountain.className()

/* Question 18
Multiple choice question
Analyze the following code:
*/
function First2() {}
class Second2 extends First2 {}
let second2 = new Second();
console.log(`${second2 instanceof First2} ${second2 instanceof Second}`);
// --> false true will be displayed, because First is not a class.

/* Question 19
Multiple choice question
value parameter is missing from the Number constructor in the place indicated in code:
Number(INSERT MISSING CODE HERE).toFixed(2);
Select the correct value so that the executed code results in the following console output: '0.01'
*/
Number(0.01).toFixed(2);
// --> 1

/* Question 20
Multiple choice question
There is a line missing from the code below:
*/
function test(str) {
  return str.toUpperCase().split(" ");
}
console.log(test("Do cats eat bats"));
// --> return str.toUpperCase().split(' ');

/* Question 21
Multiple choice question
let currentTime = new Date(Date.now());
The same effect can be achieved by using:
*/
let currentTime = new Date();

/* Question 22
Multiple choice question
Analyze the following code:
*/
let points = [
  { x: 10, y: 20 },
  { x: 0, y: 30 },
  { x: 20, y: 100 },
];
let result1 = points.some((e) => e.y < 10);
let result2 = points.every((e) => e.y > 10);
console.log(`${result1} ${result2}`);
// --> false true

/* Question 23
Multiple choice question
There is one line missing in the code below:
*/
let points2 = [
  { x: 20, y: 20 },
  { x: 10, y: 30 },
  { x: 10, y: 100 },
];
let result = points2.map((e) => e.x + e.y);
console.log(result);
// --> let result = points2.map(e => e.x + e.y);

/* Question 24
Multiple choice question
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: ['a', 'x', 'y', 'e']
*/
let x = ["a", "b", "c", "d", "e"];
x.splice(1, 0, "x", "y");
console.log(x);
// --> x.splice(1, 0, 'x', 'y');

/* Question 25
Multiple choice question
Analyze the following code:
*/
let s = new Set([1, 2, "100"]);
s.add(2);
s.add("2");
console.log(`${s.has(2)} ${s.has("2")} ${s.size}`);
// --> true true 4

/* Question 26
Multiple choice question
Analyze the following code:
*/
let m = new Map([
  [1, "11"],
  ["2", 22],
]);
m.set(1, "11");
m.set(1, "111");
console.log(`${m.size}`);
// --> 2

/* Question 27
Multiple choice question
The following data is stored in JSON format:
let strMountain = '{ "name": "Lhotse", "range": "Himalayas" }';
Which statement/command should you use to convert the data to an object that will be written to the mountain variable?
*/
// let mountain7 = JSON.parse(strMountain);

/* Question 28
Multiple choice question
Analyze the following code:
*/
console.log(`${Math.round(1.5)} ${Math.floor(1.7)} ${Math.ceil(1.2)}`);
// --> 2 1 2

/* Question 29
Multiple choice question
You have created an object of the RegExp class that you want to use to search for regular expressions:
let r = new RegExp('.\.jpg');
Select the correct alternative form of this declaration:
*/
let r = /.jpg/;

/* Question 30
Multiple choice question
Analyze the following code:
*/
let a = [1, 2];
Array.prototype.test = function () {
  console.log("test");
};
let b = [3, 4];
a.test();
b.test();
// --> two 'test' messages appear in the console.

/* Question 31
Multiple choice question
Analyze the following code:
*/
let fn = function (a, b, ...rest) {
  console.log(`${a.length} ${rest.length}`);
};
fn("1", "2", "3", "4", "5");
// --> 1 3

/* Question 32
Multiple choice question
Analyze the following code:
*/
let msg = "Bob";
let ret = (function () {
  let msg = "Marley";
  return msg;
})();
console.log(`${msg} ${ret}`);
// --> Bob Marley

/* Question 33
Multiple choice question
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: 25
*/
// let fn2 = function (msg, n) {
//   console.log(`${msg}: ${this.a ** n}`);
// };
// // Insert line of code here.
// bfn(2, 3);
// // --> let bfn = fn.bind({a: 5});

/* Question 34
Multiple choice question
A decorator is:
*/
// --> a function that wraps another function, changing its functionality to some extent.

/* Question 35
Multiple choice question
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: a b
*/
// function* testGenerator() {
//   //Insert line of coe here.
// }
// let gen = testGenerator(2);
// console.log(`${gen.next().value} ${gen.next().value}`);
// // --> yield* ["a", "b", "c", "d"];

/* Question 36
Multiple choice question
There is one line missing in the code below:
Select the correct missing line in order for the the console to display test with a delay of 3 seconds:
*/
// let fn3 = msg => console.log(msg);
// setTimeout(() => {
//     // Insert line of code here.
// }, 1000);
// // --> setTimeout(fn.bind(this, 'test'), 3000);

/* Question 37
Multiple choice question
Analyze the following code:
*/
let p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});
p.then(
  (a) => console.log(`a ${a}`),
  (b) => console.log(`b ${b}`)
);
// --> a 1

/* Question 38
Multiple choice question
Analyze the following code:
*/
let p2 = new Promise(function (resolve) {
  setTimeout(() => resolve(10), 100);
});
let r2 = new Promise(function (resolve) {
  setTimeout(() => resolve(30), 150);
});
p2.then((a) => {
  console.log(a);
  return r2;
})
  .then((a) => {
    console.log(a);
    return 50;
  })
  .then((a) => {
    console.log(a);
  });
// --> 10 30 50

/* Question 39
Multiple choice question
Analyze the following code:
*/
let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("abc"), 100);
});
async function afn() {
  console.log("def");
  let x = await p3;
  console.log(x);
}
afn();
console.log("ghi");
// --> def ghi abc

/* Question 40
Multiple choice question
There is one line missing in the code below:
*/
// let request = new XMLHttpRequest();
// let fn2 = function() {
//     console.log(request.status);
// }
// // Insert line of code here.
// // --> request.addEventListener('load', fn);
