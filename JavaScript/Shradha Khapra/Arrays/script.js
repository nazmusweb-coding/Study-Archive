/**
 * Arrays
 * Collections of items
 */

// Create Array
let heroes = ["ironman", "hulk", "thor", "batman"];
let marks = [96, 75, 48, 83, 66];
let info = ["rahul", 86, "Delhi"];

console.log(marks);
console.log(marks.length); // property
console.log(typeof marks);

// Array Indices
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]); // trying to access value that is not assigned o rdefined

// Change value of perticular index
console.log(marks);
marks[2] = 66;
console.log(marks);

// Loop over an array
// for loop
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// for-of loop
for (let hero of heroes) {
    console.log(hero);
}

// Array Methods