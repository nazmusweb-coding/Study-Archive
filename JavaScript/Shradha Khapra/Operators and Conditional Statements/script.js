// Comment
// Single line comment
// This code prints Hello World!
console.log("Hello World!")


// Multi-line comment
/**
 * This code that prints hello world
 * on our console window
 */ 
console.log("hello woeld");

/** 
 * Arithmetic Operators
 * Addition (+)
 * Subtraction (-)
 * Multiplication (*)
 * Division (/)
 * Modulus (%)
 * Exponentiation (**)
 */
let a = 5;
let b = 2;

console.log("a =", a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Unary Operators
/**
 * Pre-Increment 
 * Changes in line
 */
console.log("++a =", ++a);

/**
 * Post Increment (changes in next line)
 * Changes in next line
 */
console.log("a++ =", a++);

/**
 * Pre-Decrement (changes in line)
 * Changes in line
 */
console.log("--b =", --b);

/**
 * Post Decrement
 * Changes in next line
 */
console.log("b-- =", b--);

/**
 * Assignment Operators (assign values)
 * Assignment (=)
 * Addition assignment (+=)
 * Subtraction assignment (-=)
 * Multiplication assignment (*=)
 * Modulus assignment (%=)
 * Exponentiation assignment (**=)
 * 
 * We can use all the arithmetic operators
 * in assignment operator's form
 */
let c = 5;
let d = 2;

// Assignment 
console.log("c =", c);

// Addition assignment
console.log("c +=2, c =", c += 2);

// Subtraction assignment
console.log("c -=2, c =", c -= 2);

// Multiplication assignment
console.log("c *= 2, c =", c *= 2);

// Modulus assignment
console.log("c %= 2, c =", c %= 2);

// Exponentiation assignment
console.log("d **= 2, d =", d **= 2);

/**
 * Comparison Operators
 * Equal to (==)
 * Not equal to (!=)
 * Equal to & type (===)
 * Not equal to & type (!==)
 * Greater than (>)
 * Greater than or equal (>=)
 * Less than (<)
 * Less than or equal (<=)
 */
let e = 5; // number
let f = 5; // number
let g = "5"; // string
let h = "6"; // string

/**
 * Equal to
 * In Js, it implicitly converts type and compares
 * only value is check if they are equal or not
 * type is not checked here
 * for example, 5 == "5" 
 * it converts "5" (string) -> 5 (number) 
 * then compares.
 */
console.log("e == f,", e == f);
console.log("e == g,", e == g);

/**
 * Not equal to
 * vice versa of Equal to
 */
console.log("e != h,", e != h);

/**
 * Equal to & type
 * This is strict equality.
 * both value and type is compared strictly
 */
console.log("e === g,", e === g);

/**
 * Not equal to & type
 * vice versa of Equal to & type
 */
console.log("e !== g,", e !== g);

/**
 * Greater than
 */
console.log("e > f,", e > f);

/**
 * Greater than or equal
 */
console.log("e >= f,", e >= f);

/**
 * Less than
 */
console.log("e < f,", e < f);

/**
 * Less than or equal
 */
console.log("e <= f,", e <= f);

/**
 * Logical Operatos (evaluates multiple expressions)
 * Logical AND &&
 * Logical OR ||
 * Logical NOT !
 */

// Logical AND logic table
console.log("false && false =",false && false);
console.log("false && true =", false && true);
console.log("true && false =", true && false);
console.log("true && true =", true && true);

// Logical OR logic table
console.log("false || false =",false || false);
console.log("false || true =", false || true);
console.log("true || false =", true || false);
console.log("true || true =", true || true);

// Logical NOT logic table
console.log("!false =", !false);
console.log("!true =",!true);

/**
 * Conditional Statements
 * if statement
 * if-else statement
 * else-if statement
 */
let age = 18;

if (age >= 0 && age <= 12) {
    console.log("you are child");
} else if (age >= 13 && age <= 17) {
    console.log("you are teenager");
} else if (age >= 18 && age <= 59) {
    console.log("you are adult");
} else if (age >= 60) {
    console.log("you are old");
} else {
    console.log("age is not valid");
}