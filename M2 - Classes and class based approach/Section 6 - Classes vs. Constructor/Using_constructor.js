let Test = function(arg) {
    this.arg = arg;
    console.log(this.arg);
};
    
Test.prototype.showSth = function() {
    console.log("I'm prototyped!");
};
    
Test.showSth = function() {
    console.log(`Hi, I'm static!`);
};

let test = new Test("Hello");
test.showSth(); // Output: I'm prototyped!
Test.showSth(); // Output: Hi, I'm static!
console.log(test instanceof Test); // Output: true