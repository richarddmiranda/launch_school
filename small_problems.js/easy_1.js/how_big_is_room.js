// input - two numbers
// output - a string
// rules
//  Explicit
//    - take in two numbers as length and width in meters, provide area based on those umbers
//    - convert that area into feet as well.
//    - log this to the console as a sentence.
//    - don't worry about validating input
//  Implicit
// Algo
//    - prompt user to input the length
//    - initialise variable length to save answer.
//    - prompt user to input the width
//    - initialise variable width to save answer
//    - initialise variable area in meters as multiplication of length and width.
//    - initiailise variable area in feet as area in meters x 10.7639.
//    - turn area variables into floats with two decimals shown.
//    - print to console sentence showing the two variables.

const readline = require('readline-sync');
const FEET_IN_ONE_METRE = 10.7639;
let areaInMetres;
let areaInFeet;

console.log('Do you want to work out your area in feet or metres?');
let inputType = readline.question();

while (!['feet', 'f', 'm', 'metres'].includes(inputType)) {
  console.log('Please enter m for metres or f for feet');
  inputType = readline.question();
}

console.log('Enter the length of the room:');
let length = readline.question();
console.log('Enter the width of the room:');
let width = readline.question();

if (inputType === 'm' || inputType === 'metres') {
  areaInMetres = Number.parseFloat(length * width).toFixed(2);
  areaInFeet = Number.parseFloat(areaInMetres * FEET_IN_ONE_METRE).toFixed(2);
  console.log(`The area of the room is ${areaInMetres} square meters (${areaInFeet} square feet).`);
}
else {
  areaInFeet = Number.parseFloat(length * width).toFixed(2);
  areaInMetres = Number.parseFloat(areaInFeet / FEET_IN_ONE_METRE).toFixed(2);
  console.log(`The area of the room is ${areaInFeet} square feet (${areaInMetres} square metres).`);
}
