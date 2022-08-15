// input - two numbers
// output - A string displayed on the console.
// rules
//  Explicit
//    - Take in bill amount and tip rate.
//    - Log both tip and total bill amount
//    - Ignore input validation, assume user inputs numbers
//  Implicit
//    - 
// algo
//    - Prompt user for bill amount
//    - Initialise variable billAmount to save answer
//    - Prompt user for tip percentage
//    - Initialise variable tipPercentage to save percent. 
//      - Let user enter integer, divide it by 100 to get easy multipliable float
//    - Initialise variable tipAmount to multiply billAmount and tipPercentage.
//    - Initialise variable totalBill to add tipAmount to billAmount
//      - parse each as a float, and fix decimal points to two places.
//    - Log tipAmount and totalBill to console on two separet lines.

const readline = require('readline-sync');

console.log('What is the bill?');
let billAmount = readline.question();
console.log('What is the tip percentage?');
let tipPercentage = readline.question();

let tipAmount = Number.parseFloat(billAmount * (tipPercentage / 100))
                      .toFixed(2);
let totalBill = Number.parseFloat(billAmount) + Number.parseFloat(tipAmount);
totalBill = totalBill.toFixed(2);

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${totalBill}`);
