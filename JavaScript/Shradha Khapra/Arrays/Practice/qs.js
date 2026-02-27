// Let's Practice
/**
 * Qs. For a given array with marks of studets 
 * -> [85, 97, 44, 37, 76, 60]
 * Find the average marks of the entire class.
 */

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (mark of marks) {
    sum += mark;
}

let average = sum / marks.length;
console.log(`average makrs of the class = ${average}`);

/**
 * Qs. For a given array with prices of 5 items
 * -> [250, 645, 300, 900, 50]
 * All items have an offer of 10% OFF on them.
 * Change the array to store final price after
 * applying offer.
 */

let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    prices[i] *= 0.9;
}

console.log(prices);

/**
 * Qs. Create an array to store companies ->
 * "Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
 * a. Remove the first comopany from the array
 * b. Remove Uber and Add Ola in its place
 * c. Add Amazon at the end
 */

let companies = ["Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift();
console.log(companies);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);