/**
 * Loops in JS
 * Loops are used to execute a piece of code again and again
 * for Loop
 * while Loop
 * do-while Loop
 * for-of Loop (special loop)
 * for-in Loop (special loop)
 */

/**
 * for Loop
 * let i = 1;   initialization (once)
 * i <= 5;      condition (stopping condition)
 * i++          updation
 */
for (let i = 1; i <= 5; i++) {
    console.log("apna college");
}

console.log("for loop has ended");

/**
 * Infinite loop: a loop that never ends
 * stopping condition is always true
 * 
 * for (let i = 1; i >= 0; i++) {
 *      console.log(i =, i);
 * }
 * 
 * it is a infinite loop
 */

/**
 * while Loop
 * let i = 1;   initialization at beginning (outside)
 * i <= 5       while loop only checks condition
 * i++          updation happens inside loop
 */
let i = 1;
while (i <= 5) {
    console.log("apna college");
    i++;
}

console.log("while loop has ended");

/**
 * do-while Loop
 * condition is checked at last
 * so at least 1 iteration will
 * take place even if the condition is false
 */
let j = 1;
do {
    console.log("apna college");
    j++;
} while (j <= 5);

console.log("do-while loop has ended");

/**
 * for-of Loop
 * it is a special loop that helps us
 * to iterate through strings and arrays
 * it is also called iterator
 */
let str = "apna college";

for (let i of str) {
    console.log("i =", i);
}

/**
 * for-in Loop
 * it is a special loop that helps us
 * to iterate through objects and arrays
 * for objects it gives us key and we can
 * use that to access our value of that key.
 */
const student = {
    name : "Nazmus Sakib",
    age : 20,
    cgpa : 8.9,
    isPass : true,
};

for (let i in student) {
    console.log("key =", i, " value =", student[i]);
}

// Strings
// Create String
let strVar = "Apna College";

// String length
console.log(str.length);

// String indices
console.log(str[0], str[1], str[2]);

/**
 * Template literals
 * special type of string
 */
let string = `This is a template literal.`;
console.log(string);

// String interpolation
let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} taka`;
console.log(output);

// Escape characters
// \n next line
console.log("Nazmus\nSakib");
// \t tab space
console.log("Nazmus\tSakib");