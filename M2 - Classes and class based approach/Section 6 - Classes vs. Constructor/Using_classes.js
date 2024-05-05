class TestClass {
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    };
    
    showSth() {
        console.log("I'm prototyped!");
    };
    
    static showSth() {
        console.log(`Hi, I'm static!`);
    };
};

let test = new TestClass("Hello");
test.showSth(); // Output: I'm prototyped!
TestClass.showSth(); // Output: Hi, I'm static!
console.log(test instanceof TestClass); // Output: true