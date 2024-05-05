/*Question 1
Analyze the following code:
What will appear in the console as a result of code execution?*/
console.log(`${Boolean(-1)} ${Boolean(0)} ${String(0)} ${String(1)}`);

/*Question 2
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: ['SAMPLE', 'STRING']*/
let str = 'sample string';
let result = str.toUpperCase().split(' ');
console.log(result);

/*Question 3
Analyze the following code:
What will appear in the console as a result of code execution?*/
let str3 = 'sample string';
console.log(`${str3.includes('s')} ${str3.indexOf('s')} ${str3.lastIndexOf('s')}`);

/*Question 4
Analyze the following code:
What will appear in the console as a result of code execution?*/
let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let r1 = points.some(e => e.x === 0);
let r2 = points.every(e => e.x === 0);
console.log(`${r1} ${r2}`);

/*Question 5
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: [{x: 10, y: 20}, {x: 20, y: 100}]*/
let points2 = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let result2 = points2.filter(e => e.y > 0 && e.x > 0);
console.log(result2);

/*Question 6
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: [{x: 20, y: 100}, {x: 0, y: 30}, {x: 10, y: 20}]*/
let points3 = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let result3 = points.sort((p1, p2) => p2.y - p1.y);
console.log(result3);

/* Question 7
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output:
[30, 30, 120]*/
let points4 = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let result4 = points4.map(e => e.x + e.y);
console.log(result4);

/*Question 8
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: 1406 */
let x = [100, 101, 102, 103];
let result5 = x.reduce((e,p) => e + p, 1000);
console.log(result5);

/*Question 9
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: {x: 10, y: 20}*/
let points5 = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let result6 = points5.find(e => e.x > 0);
console.log(result6);

/*Question 10
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: ['b', 'c', 'd'] */
let x10 = ['a', 'b', 'c', 'd', 'e'];
let y = x10.slice(1, -1);
console.log(y);

/*Question 11
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: ['a', 'b', 'x', 'y', 'e']*/
let x11 = ['a', 'b', 'c', 'd', 'e'];
x11.splice(2, 2);
x11.splice(2, 0, 'x', 'y');
console.log(x11);

/*Question 12
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: 1 -> 2 -> 30 -> 20 */
let a = [1, 2, 30, 20];
let str12 = a.join(' -> ');
console.log(str12);

/*Question 13
Analyze the following code:
What will appear in the console as a result of code execution?*/
let s = new Set([1, 2, '100']);
s.add(2);
s.add('2');
console.log(`${s.has(2)} ${s.has('2')} ${s.size}`);

/*Question 14
Analyze the following code:
What will appear in the console as a result of code execution?*/
let s2 = new Set([1, 2, '100']);
console.log(...s2);

/*Question 15
Multiple choice question
Analyze the following code:
What will appear in the console as a result of code execution?*/
let m = new Map([[1, '11'], ['2', 22]]);
m.set(3, '33');
console.log(`${m.has(1)} ${m.has('1')} ${m.get(3)}`);

/*Question 16
Multiple choice question
Analyze the following code:
What will appear in the console as a result of code execution?*/
let m2 = new Map([[1, '11'], ['2', 22]]);
m2.set(1, '11');
m2.set(1, '111');
console.log(`${m2.size}`);

/*Question 17
The following data is stored in JSON format:
Select the correct command in order for the data to be converted to an object that will be written to the point variable:*/
let strPoint = '{ "x": 10, "y": 20}';
let point = JSON.parse(strPoint);

/*Question 18
Analyze the following code:
What will appear in the console as a result of code execution?*/
console.log(`${Math.floor(5.7)} ${Math.ceil(5.2)} ${Math.round(5.5)}`);

/*Question 19
Analyze the following code, in which you are trying to extend the Array class prototype with a new test method:
What will appear in the console as a result of code execution?*/
let a2 = [1,2];
Array.prototype.test = function(){
    console.log('test');
}
let b = [3,4];
a2.test();
b.test();