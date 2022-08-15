// input - number
// output - string
// rules
//  Explicit
//    - Ask user for integer greater than 0
//    - Ask user whether they want to determine sum or product of all numbers between 1 and that number
//  Implicit
//  Algo
//    - Prompt user for integer greater than 0
//    - Initialise variable number to capture their answer
//    - Prompt user for a choice between getting a sum or product of that number
//    - Initialise variable sumOrProduct to capture their answer.
//    - LOOP over each number.
//    - IF sumOrProduct is s, add each number to the result.
//    - Display a string showing the result.


const readline = require('readline-sync');

function computeSum(array) {

  return array.reduce((number, next) => number + next);

}

function computeProduct(array) {

  return array.reduce((number, next) => number * next);

}

let array = [1, 2, 3, 4, 5];

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let sumOrProductChoice = readline.question();

while (!['s', 'sum', 'p', 'product'].includes(sumOrProductChoice)) {
  console.log('Please choose either s(um) or p(roduct).');
  sumOrProductChoice = readline.question();
}

let sum;
let product;

if (sumOrProductChoice === 's' || sumOrProductChoice === 'sum') {
  sum = computeSum(array);
  console.log(`The sum of the integers between ${array[0]} and ${array[array.length - 1]} is ${sum}.`);
} else {
  product = computeProduct(array);
  console.log(`The sum of the integers between 1 and ${number} is ${product}.`);
}