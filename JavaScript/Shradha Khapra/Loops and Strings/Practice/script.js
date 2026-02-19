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