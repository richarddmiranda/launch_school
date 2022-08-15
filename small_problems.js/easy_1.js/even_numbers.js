// input - nothing
// output - console.log of numbers
// rules
//  Explicit
//    - log all even numbers from 1-99
//    - each number on a separate line
// algo
//  - Loop over each number from 1-99
//  - IF the number divided by 2 is equal to zero, PRINT it to the display.

function evenNumbers() {
  for (let i = 2; i < 100; i += 2) console.log(i);
}

evenNumbers();