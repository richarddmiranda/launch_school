//input - numbrr
//output - boolean
// req
// Explicit
//  - write function that takes in a year. If that year is a leap year, console.log(true).
//  - If year is divisable by 4, it is a leap year
//    - unless it's also dvisable by 100, thrn not aLY, unless also div. by 400
//  - Valid for every year over 0.
// Algo
//  - IF year parameter when divided by 4 has 0 remainder & when divided


function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 4 === 0 && year % 100 > 0) {
      console.log(true);
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  else if (year % 4 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true