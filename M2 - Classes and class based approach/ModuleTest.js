/*Question 1
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: Alice*/
class User {
  // Insert line of code here. --> constructor(n) { this.name = n;}
  showName() {
    console.log(this.name);
  }
}
let user = new User("Alice");
user.showName();

/*Question 2
There is one line missing in the code below:
Select the correct missing line in order to declare a property named test and initialize it with the value 10: */
class A {
  // Insert line of code here. --> test = 10;
}

/*Question 3
There is one line missing in the code below:
Select the correct missing line in order to insert a private property declaration in the code: */
/*
class User {
    // Insert line of code here. --> #name = 'Bob';
    get name() {return this.#name;}
}
let point = new User();
point.x = 10;
*/

/*Question 4
Analyze the following code:
What will appear in the console as a result of code execution? */
class Point {
  #x = 0;
  #y = 0;
  color = "red";
}
let point = new Point();
console.log(Object.keys(point));

/*Question 5
Analyze the following code:
What will appear in the console as a result of code execution?*/
class User2 {}
let user2 = new User();
console.log(`${user2 instanceof User} ${typeof user2}`);

/*Question 6
Multiple choice question
Analyze the following code:
Select the correct command in order for the console to show the following string after running the whole code: Bob Marley */
class User3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let user3 = new User3("Bob Marley");
// --> console.log(user3.fullName);

/*Question 7
There is one line missing in the code below:
Select the correct missing line in order for the console to show the following after running the whole code: Bob */
class User4 {
  _name = "Alice";
  // Insert line of code here. --> set name(val) { this._name = val;}
}
let user4 = new User4();
user4.name = "Bob";
console.log(user4._name);

/*Question 8
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output: A B */
/*class A {
  test1() { return 'A';}
}

// Insert line of code here. --> class B extends A {
  test2() { return 'B';}

}
let b8 = new B();
console.log(`${b8.test1()} ${b8.test2()}`);*/


/*Question 9
Analyze the following code:
What will appear in the console as a result of code execution?*/
class User5 {}
class EUser extends User5 {}
class EEUser extends EUser {}
let eeuser = new EEUser();
console.log(
  `${eeuser instanceof User5} ${eeuser instanceof EUser} ${
    eeuser instanceof EEUser
  }`
);

/*Question 10
Analyze the following code:
What will appear in the console as a result of code execution?*/
class A2 {
  getName() {
    return "A";
  }
}

class B extends A2 {
  getName() {
    return "B";
  }
  test(x) {
    return x ? this.getName() : super.getName();
  }
}

let b = new B();
console.log(`${b.test(true)} ${b.test(false)}`);

/*Question 11
Multiple choice question
There is one line missing in the code below:
Select the correct missing line so that the executed code results in the following console output:
A: 10
B: 10*/
// class A3 {
//     constructor(val) {
//         console.log(`A: ${val}`);
//     }
// }

// class B2 extends A3 {
//     constructor(val) {
//         // Insert line of code here. --> super(val);
//         console.log(`B: ${val}`);
//     }
// }

// let b2 = new B2(10);

/*Question 12
Multiple choice question
You have declared the class Test and create a test object from it:
Select the correct call so that the executed code results in the following console output: Test */
class Test {
  static info() {
    return "Test";
  }
}
test = new Test();
// --> Test.info()