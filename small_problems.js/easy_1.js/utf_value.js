// input string
// output - number
// explicit
// - Write function that returns UTF-16 string value of string argument
// - UTF-16 sv is sum of every char in string
// implicit
// - if empty, return 0

// algo
// - SET variable array to the string, split into an array.
// - Iterate through the array, returning a new array with each character transformed into it's characyer code.
// - Make sure that char code is coerced into a number
// - SET variable sumCharCodes to all of the values added up together
// - RETURN sumCharCodes

function utf16Value(string) {
  let array = string.split('');

  if (string === '') return 0;

  let newArray = array.map(char => {
    return char.charCodeAt();
  })
  let sumCharCodes = newArray.reduce((number, next) => number + next);
  return sumCharCodes;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School')); 
console.log(utf16Value('a'));  
console.log(utf16Value('')); 

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
//utf16Value(OMEGA + OMEGA + OMEGA);  // 2811