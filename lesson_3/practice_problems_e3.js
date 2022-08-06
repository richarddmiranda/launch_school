// Question 1
let numbers = [1, 2, 3, 4];
numbers.forEach(_ => numbers.splice(0));
console.log(numbers);

numbers = [];

while(numbers.length > 0) {
  numbers.pop();
}

while(numbers.length > 0) {
  numbers.shift();
}


// Question 2

'1,2,34,5'

// Question 3
'hello there'

// Question 4
[{ first: 42 }, { second: "value2" }, 3, 4, 5]

// Question 5

function isColorValid(color) {
   return color === "blue" || color === "green"
};

const isColorValid = color => color === "blue" || color === "green";



