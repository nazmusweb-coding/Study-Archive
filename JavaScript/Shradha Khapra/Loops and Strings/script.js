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

/**
 * String Methods
 * These are built-in functions to manipulate a string
 */

// str.toUpperCase()
let stringVar = "Bangladesh Bank Adarsha High School";
console.log(stringVar.toUpperCase());

// str.toLowerCase()
let stringVar2 = "United International University";
console.log(stringVar2.toLowerCase());

// str.trim() removes whitespace at starting and ending
let stringVar3 = "    Youtube is very useful  ";
console.log(stringVar3.trim());

// str.slice(start, end) last ending index is not inclusive
let stringVar4 = "0123456789";
console.log(stringVar4.slice(1, 6));

// str1.concat(str2)
let stringVar5 = "Nazmus ";
let stringVar6 = "Sakib";
console.log(stringVar5.concat(stringVar6));

// str.replace(searchVal, newVal) replaces only first match
let stringVar7 = "Hello World! ello";
console.log(stringVar7.replace("ello", "allo"));

// str.replaceAll(searchVal, newVal) replaces all the match
console.log(stringVar7.replaceAll("ello", "allo"));

// str.charAt(idx)
let stringVar8 = "I love JS";
console.log(stringVar8.charAt(3));

/** 
 * If we want to change a string we have to completly reassign it
 * we can do it using methods or normally just reassign with changes
 * str = "Nazmus SakIb";
 * str[10] = "i" // this will not take effect
 * str = "Nazmus Sakib" // normally completly reassign it with changes
 * or
 * str = str.replace("I", "i")                  // use method replace
 * or
 * str = str.replaceAll(str, "Nazmus Sakib")    // use replaceAll method
 * It depends on you how you do it.
 */


