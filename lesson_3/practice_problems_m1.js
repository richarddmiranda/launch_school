// Question 1

let string = 'The Flintstones Rock!';
let array = string.split('');

for (let i = 0; i < 10; i ++) {
  array.unshift(' ');
  console.log(array.join(''));
}


//Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription[0].toLowerCase() + munstersDescription.slice(1).toUpperCase()

let munstersDescription = "The Munsters are creepy and spooky.";
let newString = munstersDescription.split('')
    .map((char) => {
      if (char === char.toUpperCase()) { 
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      };
    });

console.log(newString.join(''));

// Question 3
function factors(number) {
  let divisor = 0;
  let factors = [];
  if (number <= 0) {
    return;
  };

  for (let divisor = 1; divisor < number; divisor ++) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    };
  };
  return factors;
};

console.log(factors(10));

// Question 4
// Implementation 1 mutates the array, 2 does not


// Question 5
// 0.9, true [Incorrect]


// Question 7
// 34


// Question 8
// Yes, as objects are passed by reference.

// Question 9
// "paper"

// Question 10
// "no"