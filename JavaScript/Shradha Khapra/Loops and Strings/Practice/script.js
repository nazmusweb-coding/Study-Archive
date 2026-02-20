// Loop
// Qs1. Print all even numbers from 0 to 100.

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even number.`);
    }
}

/**
 * Qs2. Create a game where you start with any random
 * game number. Ask the user to keep guessing the game
 * number until the user enters correct value.
 */

let gameNumber = 25;
let userNumber = prompt("Guess the game number:");

while (gameNumber != userNumber) {
    userNumber = prompt("You entered wrong number. Guess again:");
}

console.log("You guessed it correctly.");

// String
/**
 * Qs1. Prompt the user to enter their full name.
 * Generate a username for them based on the input.
 * Start username with @, followed by their full
 * name and ending with full length.
 * 
 * eg: user name = "shradhakhapra", username should be "@shradhakhapra"
 */

let fullName = prompt("Enter your full name:");
let userName = ("@".concat(fullName)).concat(fullName.length);
console.log(userName);