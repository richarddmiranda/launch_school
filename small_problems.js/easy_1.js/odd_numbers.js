// input - nothing
// output - log to console (undefined)
// rules
// Explicit requirements
//  - log only odd numbers
//  - have each one on a separate line

//Algo
// LOOP over every number from 1 to 99
// IF the number when divided by 2 is equal to 1, then console.log it


function oddNumbers() {
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) console.log(i);
  }
}

// oddNumbers();

// FURTHER exploration
// input - number from user
// output, log to console
//EXPLICIT requirements
// - log only odd numbers, using different method from above.
// - let user define what number it stops at.

function oddNumbersAgain(integer) {
  let counter = 1;
  while (counter <= integer) {
    if (counter % 2 === 1) console.log(counter);
    counter++
  }

}

oddNumbersAgain(77);