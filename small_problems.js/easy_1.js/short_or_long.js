// input - two strings
// output - string
// Explicit
//  - Write function that takes two strings as argument
//  - Determine the length of the two strings.
//  - Return result of concatenating shorter string, longer string and shirt string again.
//  - Assume that strings are of different lengths.
// Implicit
//  - If one string is empty, just print the resulting string.
// Algo
//  - IF string1's length is greater than string2's, concat string1, string2, then string1 again
//  - ELSE IF string 2's length is greater than string1's,  concat string2, string1, then string2


function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));