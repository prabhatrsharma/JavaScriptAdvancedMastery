// Topic: 3.3.12 Basic rules for regular expressions

/* Concepts:
- Regular expressions (regex) use metacharacters and rules to define search patterns in strings.
- The dot (.) is a basic metacharacter that matches any single character.
- The backslash (\) is used to escape metacharacters, making them literal characters.
- Metacharacters such as * (asterisk), + (plus), and ? (question mark) indicate repetition of the preceding character or group.
- The vertical bar (|) serves as an alternative in regex patterns.
- Parentheses () are used to group elements in regex patterns.
- Curly brackets ({}) specify the exact number of repetitions of a character or group.
- The \s metacharacter matches whitespace characters (spaces, tabs, newlines, etc.).
- Square brackets [] define a set of characters to match.
- The \d metacharacter matches any digit.
- The caret (^) matches the beginning of a string, while the dollar sign ($) matches the end of a string in regex patterns.
*/

// Code:

let re1 = /c\.t/;
console.log(re1.exec("cut")); // Output: null
console.log(re1.exec("c.t")); // Output: ["c.t", index: 0, input: "c.t", groups: undefined]

let re2 = /o*ps/;
console.log(re2.exec("ps")); // Output: ["ps", index: 0, input: "ps", groups: undefined]
console.log(re2.exec("ops")); // Output: ["ops", index: 0, input: "ops", groups: undefined]
console.log(re2.exec("He said: ooops!")); // Output: ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re3 = /o+ps/;
console.log(re3.exec("ps")); // Output: null
console.log(re3.exec("ops")); // Output: ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!")); // Output: ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re4 = /o?ps/;
console.log(re4.exec("ps")); // Output: ["ps", index: 0, input: "ps", groups: undefined]
console.log(re4.exec("ops")); // Output: ["ops", index: 0, input: "ops", groups: undefined]
console.log(re4.exec("He said: ooops!")); // Output: ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re5 = /ca|ut/;
console.log(re5.exec("cattle")); // Output: ["ca", index: 0, input: "cattle", groups: undefined]
console.log(re5.exec("haircut")); // Output: ["ut", index: 5, input: "haircut", groups: undefined]
console.log(re5.exec("city")); // Output: null

let re6 = /c(a|u)t/;
console.log(re6.exec("cattle")); // Output: ["cat", "a", index: 0, input: "cattle", groups: undefined]
console.log(re6.exec("haircut")); // Output: ["cut", "u", index: 4, input: "haircut", groups: undefined]
console.log(re6.exec("city")); // Output: null

let re7 = /\so{2,3}ps/;
console.log(re7.exec("He said: ops!")); // Output: null
console.log(re7.exec("He said: ooops!")); // Output: ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
console.log(re7.exec("He said: ooooooooops!")); // Output: null

let re8 = /c[aiu]t/;
console.log(re8.exec("cattle")); // Output: ["cat", index: 0, input: "cattle", groups: undefined]
console.log(re8.exec("haircut")); // Output: ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re8.exec("city")); // Output: ["cit", index: 0, input: "city", groups: undefined]

let re9 = /c[^au]t/;
console.log(re9.exec("cattle")); // Output: null
console.log(re9.exec("haircut")); // Output: null
console.log(re9.exec("city")); // Output: ["cit", index: 0, input: "city", groups: undefined]

let re10 = /id\d+/;
console.log(re10.exec("My ids.")); // Output: null
console.log(re10.exec("id60001")); // Output: ["id60001", index: 0, input: "id60001", groups: undefined]

let re11 = /^(abc\s){3}$/;
console.log(re11.exec("abc abc abc ")); // Output: ["abc abc abc ", "abc ", index: 0, input: "abc abc abc ", groups: undefined]
console.log(re11.exec("abc abc abc abc ")); // Output: null
console.log(re11.exec("abc abcabc")); // Output: null