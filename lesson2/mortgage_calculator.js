function prompt(message) {
  console.log(`=> ${message}`);
};

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

function takeDollarSignOff (string) {
  let dollarlessNumber = string.split('');
  if (dollarlessNumber[0] === '$') {
    dollarlessNumber = dollarlessNumber.filter(number => number.match(/[0-9]/i))
                               .join('');
  } else {
    dollarlessNumber = dollarlessNumber.join('');
  };
  return dollarlessNumber;
};

function takePercentSignOff (string) {
  let percentlessNumber = string.split('');
  if (percentlessNumber[string.length - 1] === '%') {
    percentlessNumber = percentlessNumber.filter(number => number.match(/[0-9]/i))
                                         .join('');
  } else {
    percentlessNumber = percentlessNumber.join('');
  };
  return percentlessNumber;
};

function percentageFix (percent) {
  if (percent < 0.5) {
    percent = (percent * 100).toString();
  }
  return percent;
}

const MESSAGES = require('./mortage_messages.json');
const READLINE = require('READLINE-sync');
let continueCalculating = 'y';
let firstCalculation = true;
prompt(MESSAGES['welcome']);

while (continueCalculating === 'y') {

  if (firstCalculation === false) {
    prompt(MESSAGES['continue']);
    continueCalculating = READLINE.question();
  };

  while (!['y', 'n'].includes(continueCalculating)) {
    prompt(MESSAGES['yesOrNo']);
    continueCalculating = READLINE.question();
  };

  if (continueCalculating === 'n') {
    prompt(MESSAGES['goodbye']);
    return;
  };

  prompt(MESSAGES['loanAmount']);
  let loanAmount = READLINE.question();
  loanAmount = takeDollarSignOff(loanAmount);

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNumber']);
    loanAmount = READLINE.question();
    loanAmount = takeDollarSignOff(loanAmount);
  };



  prompt(MESSAGES['annualInterestRate']);
  let annualInterestRate = READLINE.question();
  annualInterestRate = percentageFix(takePercentSignOff(annualInterestRate));

  while (invalidNumber(annualInterestRate)) {
    prompt(MESSAGES['invalidNumber']);
    annualInterestRate = READLINE.question();
    annualInterestRate = percentageFix(takePercentSignOff(annualInterestRate));
  };

  prompt(MESSAGES['loanDurationYears']);
  let loanDurationYears = READLINE.question();

  while (invalidNumber(loanDurationYears)) {
    prompt(MESSAGES['invalidNumber']);
    loanDuration = READLINE.question();
  };

  loanAmount = Number(loanAmount);
  annualInterestRate = parseFloat(annualInterestRate);
  loanDurationYears = Number(loanDurationYears);
  let loanDurationMonths = loanDurationYears * 12;
  let monthlyInterestRate = (annualInterestRate / 12) / 100;
  let monthlyPayment = parseFloat(loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))))).toFixed(2);;
  let totalPaidBack = (monthlyPayment * loanDurationMonths).toFixed(2);
  let totalInterest = (totalPaidBack - loanAmount).toFixed(2);

  prompt(`Your monthly payment amount comes to $${monthlyPayment}`);
  prompt(`You will make a total of ${loanDurationMonths} payments, for a total amount of $${totalPaidBack}`);
  prompt(`Of that, $${totalInterest} will be just interest.`);

  firstCalculation = false;
};









/* Things to add to mortgage calculator

1. Loop that asks if they want to continue ✅
2. Percentage if they put in decimal point. ✅
2. Function that removes the percentage. ✅
3. More result messages that show off different calculations ✅
4. Fix the fact that if the number ends on a zero, it only has one decimal place. ✅
5. Add ability to add months to it 
6. Add ability to 


*/