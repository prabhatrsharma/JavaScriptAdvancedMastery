/*Question 1
You have declared the following statement:
What declaration should precede the statement so that the text Bob appears in the console as a result of code execution?*/
let person = {name: 'Bob', age: 30};
console.log(person.name);

/*Question 2
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: Dodge Viper, color: red */
let car = {
  make: 'Dodge',
  model:'Dakota'
}
car.model = 'Viper'; car.color = 'red';
console.log(`${car.make} ${car.model}, color: ${car.color}`);

/*Question 3
You have declared a circle object:
Which of the following will display the value of the circle's x-coordinate (i.e. 10) in the console?*/
let circle = {
    centre: {
       x: 10,
       y: 20
    },
    radius: 100
}
console.log(circle.centre.x);

/*Question 4
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: 100 */
let key = 'x'
let point = {
    x: 100,
    y: 200
}
console.log(point[key]);

/*Question 5
You have declared a point object that has one property: geo position string
Which of the following is the correct way to refer to this property? */
let point2 = {
    'geo position string': '67.88183984530318, 12.97985704867863'
}
console.log(point2['geo position string']);

/*Question 6
You have declared a user object:
Which line of code will display the values of all object properties? The console should show Ian and 44 */
let user = {
    name: "Ian",
    age: 44
}
Object.keys(user).forEach(key => console.log(user[key]));

/*Question 7
You have declared two user objects:
Which of the following comparisons will return true?*/
let user1 = {
    name: 'Alice'
}
let user2 = {
    name: 'Alice'
}
console.log((user1.name == user2.name) && (user1.name == user2.name));

/*Question 8
Analyze the following code:
What will appear in the console as a result of code execution?*/
let user3 = {
    name: 'Ian',
    age: 44
}
let user4 = user3;
user4.age = 40;
console.log(`${user4.name} ${user3.age}`);

/*Question 9
Analyze the following code:
What will appear in the console as a result of code execution?*/
let car1 = {
    make: 'Dodge',
    model: 'Viper'
}
let car2 = Object.assign({}, car1, {model:'RAM', transmission: 'automatic'}, {color: 'red'});
car1.color = 'green';
console.log(`${car2.make} ${car2.model} ${car2.transmission} ${car2.color}`);

/*Question 10
Analyze the following code:
What will appear in the console as a result of code execution?*/
let car3 = {
    make: 'Dodge',
    model: 'Viper'
}

let car4 = { ...car3, model:'RAM', color: 'red'};
car1.color = 'green';
console.log(`${car4.make} ${car4.model} ${car4.color}`);

/*Question 11
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: 100 100*/
let point3 = {
    x: 100,
    y: 100,
    show: function() {console.log(`${this.x} ${this.y}`);}
}
point3.show();

/*Question 12
You have declared the following point object:
The default way to call the show method is: point.show(). Select the correct alternative to call this method:*/
let point4 = {
    x: 100,
    y: 100,
    show: function() {console.log(`${this.x}:${this.y}`)}
}
point4.show();

/*Question 13
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: 0 */

let point5 = {
    x: 100,
    y: 200,
    set positionX(x) {this.x = x;}
}
point5.positionX = 0;
console.log(point5.x)

/*Question 14
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: Toyota undefined undefined */
let car5 = {
    make: 'Dodge',
    model: 'Viper'
}
Object.freeze(car5);
delete car5.model;
car5.make = 'Toyota';
car5.color = 'red';
console.log(`${car5.make} ${car5.model} ${car5.color}`);

/*Question 15
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: Dodge Viper */
let Car = function(make, model) {
    this.make = make;
    this.model = model;
}
let car6 = new Car('Dodge', 'Viper');
console.log(`${car6.make} ${car6.model}`);

/*Question 16
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: Dodge Viper */
let getCar = function(make, model) {
    return {make, model};
}
let car7 = getCar('Dodge', 'Viper');
console.log(`${car7.make} ${car7.model}`);

/*Question 17
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: Dodge Viper*/
let getCar2 = (make, model) => ({make, model});
let car8 = getCar2('Dodge', 'Viper');
console.log(`${car8.make} ${car8.model}`);

/*Question 18
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: 0 */
let Point = function(x, y) {
    this.x = x;
    this.y = y;
}
let point6 = new Point(0, 0);
let ColorPoint = function(color) {
    this.color = color;
}
ColorPoint.prototype = point6;
let cpoint = new ColorPoint('red');
console.log(cpoint.x);