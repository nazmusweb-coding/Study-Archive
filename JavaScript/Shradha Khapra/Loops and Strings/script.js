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
 * i++          updatation
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
 * i++          updatation happens inside loop
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