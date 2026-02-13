// Printing on console
console.log()

// Naming Convention - Cases
// Camel Case
isFollow = true;
totalPrice = 220;

// SCREAMING_SNAKE_CASE
MAX_PRICE = 300;
PI_VALUE = 3.1416;

// let, const & var
// let is used to declare variables. A block scope variable.
let fullName = "tony stark";
let age = 24;

// var is also used to declare variables but it is old and
// redeclaring is not standard
var yourAge = 24;
var yourAge = 59;
var yourAge = 86;
console.log(yourAge);

// const is used to declare constant variables
const PI = 3.14;
console.log(PI);

// Data types in js
// Primitive
// 1. Number
let myAge = 24;
let price = 100.5;
console.log(typeof myAge, typeof price);

// 2. String
let myFullName = "Nazmus Sakib";
console.log(myFullName, typeof myFullName);

// 3. Boolean
isFollow = true;
console.log(true, typeof isFollow);

// 4. Undefined
let a;
console.log(a, typeof a);

// 5. Null
let x = null;
console.log(x, typeof x);

// 6. BigInt
let y = BigInt("123");
console.log(y, typeof y);

// 7. Symbol
let z = Symbol("Hello!");
console.log(z, typeof z);

// Non-primitive
const student = {
    fullName: "Nazmus Sakib",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
console.log(student, typeof student);
console.log(student["fullName"]); // first way of accessing key
console.log(student.age); // second way of accessing key
student["fullName"] = "Sakib"; // updating value
console.log(student);