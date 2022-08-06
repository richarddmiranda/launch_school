// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replaceAll('important', 'urgent'));


// Question 2
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray);

let numbers = [1, 2, 3, 4, 5];
let sortedArray = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(sortedArray);

let numbers = [1, 2, 3, 4, 5];
let forEachArray = [];
numbers.forEach(function (num) {
  forEachArray.unshift(num);
});
console.log(forEachArray);

// Question 3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

// Question 4 
let famousWords = "seven years ago...";
let famousIntro = "Four score and "

console.log(famousIntro + famousWords);
console.log(`${famousIntro}${famousWords}`);

// Question 5

let numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1);
console.log(numbers);

// Question 6

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones.flat());

// Question 7

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let array = Object.entries(flintstones)[2];

// Question 8
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
Array.isArray(numbers);
Array.isArray(table);

// Question 9
let title = "Flintstone Family Members";
let spaceAtFront = Math.floor((40 - title.length) / 2);
console.log(title.padStart(spaceAtFront + title.length));


//Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.match(/[t]/g).length;



