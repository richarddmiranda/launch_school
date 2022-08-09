// Question 1
// let arr = ['10', '11', '9', '7', '8'];
// console.log(arr.sort((a, b) => parseInt(b) - parseInt(a)));

// Question 2

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return parseInt(a.published) - parseInt(b.published);
});

// Question 3

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1.b[1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
Object.keys(obj2.third)

// Question 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4

// Question 5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;

let agesArray = Object.values(munsters)
                      .map(demoInfo => {
                        return totalAge += demoInfo.age;
                      });           

agesArray.reduce((number, next) => number + next);


// Question 6

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(member => {
  let name = member[0];
  let age = member[1]['age'];
  let gender = member[1]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}.`)
})

// Question 7
a = 2
b = [3, 8]

// Question 8

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(subArray => {
  subArray.forEach(string => {
    string.split('')
          .filter(letter => {
      if (letter.match(/[aeiou]/g)) {
        console.log(letter);
      };
    });
  })
});

// Question 9

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => a - b);
  } else {
    return subArray.slice().sort();
  };
});

console.log(arr);

// Question 10

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => b - a);
  } else {
    return subArray.slice().sort().reverse();
  };
});

console.log(arr);


// Question 11

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(object => {
  return Object.values(object).map(value => value + 1);
});


// Question 12

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArray = arr.map(subArray => {
  return subArray.filter(value => value % 3 === 0)
});

// Question 13

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddSumA = a.filter(value => value % 2 === 1)
                          .reduce((next, number) => next + number);
  let oddSumB = b.filter(value => value % 2 === 1)
                          .reduce((next, number) => next + number);
  return oddSumA - oddSumB;

});
console.log(arr);

// Question 14

Object.values(obj).map(object => {
  if (object.type === 'fruit') {
    return object.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return object.size.toUpperCase();
  };
});


// Question 15

let newArray = arr.filter(object => {
  return Object.values(object).every(array => {
    return array.every(value => value % 2 === 0);
      });
    }); 


// Question 16

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newObject = {}
arr.map(subArray => {
  let key = subArray[0];
  let value = subArray[1];
  newObject[key] = value;
  });


// Question 17

function generateUUID() {
  let array = [];
  array.push(runAlphanumericMultipleTimes(8));
  array.push(runAlphanumericMultipleTimes(4));
  array.push(runAlphanumericMultipleTimes(4));
  array.push(runAlphanumericMultipleTimes(4));
  array.push(runAlphanumericMultipleTimes(12));
  return array.join('-'));
};

function randomAlphanumeric() {
  const alphaNumerics = 'abcdef1234567890';
  let index = Math.floor(Math.random() * alphaNumerics.length);
  return alphaNumerics[index];
};

function runAlphanumericMultipleTimes (timesRun) {
  let finalString = '';
  for (let i = 0; i < timesRun; i ++) {
    finalString += randomAlphanumeric();
  };
  return finalString;
};

generateUUID();





