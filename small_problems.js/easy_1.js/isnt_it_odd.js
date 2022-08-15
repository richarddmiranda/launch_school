// input - a number
// output - a boolean
// rules:
//  Explicit Requirements:
//     - takes integer, whether positive, negative or zero.
//     - returns true if asolute value is odd
//     - can asume argument is valid integer.

//Algorithm
// IF integer, when divided by three, has a remainder of 1, return true
// ELSE return false.


function isOdd(integer) {
  if (integer % 2 === 1 || integer % 2 === -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true