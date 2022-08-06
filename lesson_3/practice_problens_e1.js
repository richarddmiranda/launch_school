// Question 1
// A: No error, numbers[4] returns undefined.

// Question 2
// A: str1.endsWith("!");

// Question 3
// A: ages.hasOwnProperty('Spot');

// Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newMunstersStringCap = munstersDescription.charAt(0).toUpperCase() + munstersDescription.toLowerCase().slice(1);
console.log(newMunstersStringCap);

// Question 5
// A: true, false

// Question 6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
ages.Marilyn = 22;
ages.Spot = 237;
console.log(ages);

// Question 7
str1.includes('Dino')

// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');

// Question 9
flintstones.push('Dino', 'Hoppy');

// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let houseIndex = advice.indexOf('house');
let newAdvice = advice.slice(0, houseIndex);
console.log(newAdvice);
