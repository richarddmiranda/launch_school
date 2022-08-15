// input number
// output number
// explicut
//  - Write function that computes sum of all numbers between 1 and number inputted, that are divisable by 3 or 5
//  - include number itself
//  - assume number is integer greater than 1
// algo
//  - set sum variable
//  - LOOP over each number starting at 1, stopping when it's equal to number argument
//  - IF number is divisable by 3, add it to the sum variable
//  - ELSE if number is div by 5, add it to the sum variable
//  - ELSE loop to the next number
//  - RETURN sum

function multisum(number) {
  let sum = 0;

  for (let counter = 0; counter <= number; counter++) {
    if (counter % 3 === 0) {
      sum += counter;
    } else if (counter % 5 === 0) {
      sum += counter;
    } else {
      continue;
    }
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168