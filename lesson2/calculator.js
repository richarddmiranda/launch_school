function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

function prompt(message) {
  console.log(`=> ${message}`);
}

const MESSAGES = require('./calculator_messages.json');
const READLINE = require('READLINE-sync');

prompt(MESSAGES['welcome']);
let continueCalculating = 'y';
let firstCalculation = true;

while (continueCalculating === 'y') {

  if (firstCalculation === false) {
    prompt(MESSAGES['continue']);
    continueCalculating = READLINE.question();
  };


  while (!['y', 'n'].includes(continueCalculating)) {
    prompt(MESSAGES['yesOrNo']);
    continueCalculating = READLINE.question();
  }

  if (continueCalculating === 'n') {
    prompt(MESSAGES['goodbye']);
    return;
  }

  prompt(MESSAGES['firstNumber']);
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = READLINE.question();
  };

  prompt(MESSAGES['secondNumber']);
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = READLINE.question();
  };

  prompt(MESSAGES['operation']);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['chooseOperation']);
    operation = READLINE.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  };

  prompt(`The result is: ${output}`);
  firstCalculation = false;

};

