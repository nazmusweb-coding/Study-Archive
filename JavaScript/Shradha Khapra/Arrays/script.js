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
// push() add to end and return new length
let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push("chips", "burger")
console.log(foodItems);

// pop() remove from the end and return
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);

// toString() conversts array to string
let beString = foodItems.toString() ;
console.log(beString);

// concat() joins multiple arrays and returns result
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];
let allHeroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(allHeroes);

// unshift() add to start and return new length
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

// shift() remove from the start and return
let removedhero = indianHeroes.shift();
console.log("deleted", removedhero);

// splice() removes or replace or add and returns deleted array
let names = ["Sakib", "Sujon", "Sriti"];
console.log(names.splice(1, 1, "Sharmin", "Emma"));
console.log(names);

// slice() returns a piece of the array
let ifterItems = ["Muri", "Boot", "Piyaju", "Alur Chop", "Beguni", "Jilapi"];
console.log(ifterItems.slice(3, 5));
console.log(ifterItems.slice(3));