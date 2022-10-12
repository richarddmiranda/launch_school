const readline = require('readline-sync');

const MIN_PERCENTAGE_TO_ADJUST_CHOICES = 30;

function createPlayer() {
  return {
    move: null,
    score: 0,
    moveHistory: [],
  };
}

// eslint-disable-next-line max-lines-per-function
function createComputer() {

  let playerObject = createPlayer();

  let computerObject = {

    choices: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    losingMoves: [],

    choose() {

      let randomIndex = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIndex];

    },

    resetChoices() {
      this.choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    },

    addLosingMove(move) {
      this.losingMoves.push(move);
    },

    calculateLosses() {

      let totalLosses = this.losingMoves.length;
      let rockLosses = this.losingMoves.filter(choice => choice === 'rock').length;
      let paperLosses = this.losingMoves.filter(choice => choice === 'paper').length;
      let scissorsLosses = this.losingMoves.filter(choice => choice === 'scissors').length;
      let spockLosses = this.losingMoves.filter(choice => choice === 'spock').length;
      let lizardLosses = this.losingMoves.filter(choice => choice === 'lizard').length;

      let losingPercentageRock = (rockLosses / totalLosses) * 100;
      let losingPercentagePaper = (paperLosses / totalLosses) * 100;
      let losingPercentageScissors = (scissorsLosses / totalLosses) * 100;
      let losingPercentageSpock = (spockLosses / totalLosses) * 100;
      let losingPercentageLizard = (lizardLosses / totalLosses) * 100;

      return {
        rock: losingPercentageRock,
        paper: losingPercentagePaper,
        scissors: losingPercentageScissors,
        spock: losingPercentageSpock,
        lizard: losingPercentageLizard,

      };

    },

    // This is a simple 'ai' to reduce the computer's probability of selecting
    // a historically losing choice. All five game choices sit in an array
    // `choices`that gets reset after every turn. After every turn, these
    //same five choices are added to the array, so that it's length is
    // equal to 10. If a certain choice by the computer represents 30%
    // or more of it's losses, it does not push a second version to the
    // `choices` array, thereby reducing it's chances of getting chosen by half.

    adjustWeights() {
      let currentPercentages = this.calculateLosses();
      this.resetChoices();

      for (let choice in currentPercentages) {

        if (currentPercentages[choice] < MIN_PERCENTAGE_TO_ADJUST_CHOICES) {
          this.choices.push(choice);
        }
      }
    },

  };

  return Object.assign(playerObject, computerObject);
}

// eslint-disable-next-line max-lines-per-function
function createHuman() {

  let playerObject = createPlayer();

  let humanObject = {

    choose() {
      let choice;
      const VALID_CHOICES = {r: 'rock', p: 'paper', sc: 'scissors', l: 'lizard', sp: 'spock',};
      let longHand = Object.values(VALID_CHOICES);
      let shortHand = Object.keys(VALID_CHOICES);

      while (true) {
        console.log(`\nPlease choose one of the following: ${longHand.join(', ')}. `);
        console.log(`(you can abbreviate them by choosing: ${shortHand.join(', ')}).`);
        choice = readline.question();

        if (shortHand.includes(choice)) {
          choice = VALID_CHOICES[choice];
        }
        if (longHand.includes(choice)) break;
        console.log('Sorry, invalid choice');
      }

      this.move = choice;

    },

  };

  return Object.assign(playerObject, humanObject);
}

function createRules() {
  return {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  };
}

const RPSGame = {

  human: createHuman(),
  computer: createComputer(),
  rules: createRules(),
  numberOfMatchesToWin: 5,
  gameWinner: null,

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
    console.log(`First to ${this.numberOfMatchesToWin} games wins.`);
  },

  displayGoodbyeMessage() {
    console.clear();
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock!');
  },

  displayChoices() {
    console.clear();
    console.log(`\nYou chose: ${this.human.move.toUpperCase()}`);
    console.log(`The computer chose: ${this.computer.move.toUpperCase()}`);

  },

  determineWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (this.rules[humanMove].includes(computerMove)) {
      this.gameWinner = 'human';
    } else if (this.rules[computerMove].includes(humanMove)) {
      this.gameWinner = 'computer';
    }

  },

  displayGameWinner() {
    let winner = this.gameWinner;

    if (winner === 'human') {
      console.log('\nYou win!');
    } else if (winner === 'computer') {
      console.log('\nComputer wins!');
    } else {
      console.log(`\nIt's a tie`);
    }

  },

  updateScores() {
    if (this.gameWinner === 'human') {
      this.human.score += 1;
      this.computer.addLosingMove(this.computer.move);
    }
    if (this.gameWinner === 'computer') this.computer.score += 1;
  },

  displayScores() {
    console.log(`\nThe scores are =>> YOU: ${this.human.score} || COMPUTER: ${this.computer.score} `);

  },

  updateMoveHistory() {
    this.computer.moveHistory.push(this.computer.move);
    this.human.moveHistory.push(this.human.move);
  },

  displayMoveHistory() {

    console.log(`\nYour moves so far this match: ${this.human.moveHistory.slice().join(', ')}`);
    console.log(`The computer's moves: ${this.computer.moveHistory.slice().join(', ')}`);
  },

  playAgain() {
    console.log('\nWould you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  resetWinner() {

    this.gameWinner = null;

  },

  resetGame() {
    this.human.score = 0;
    this.computer.score = 0;
    this.human.moveHistory = [];
    this.computer.moveHistory = [];
  },

  playRound() {

    this.human.choose();
    this.computer.choose();
    this.displayChoices();
    this.determineWinner();
    this.displayGameWinner();

  },

  displayMatchWinner() {

    if (this.human.score === 5) {
      console.log(`\nYou won the best out of ${this.numberOfMatchesToWin}! Congratulations.`);
    } else if (this.computer.score === 5) {
      console.log(`\nYou lost the best out of ${this.numberOfMatchesToWin} to the computer. Unlucky...`);
    }
  },

  play() {

    this.displayWelcomeMessage();

    while (true) {
      this.resetGame();
      console.clear();

      while (this.human.score !== this.numberOfMatchesToWin &&
        this.computer.score !== this.numberOfMatchesToWin) {

        this.playRound();
        this.updateScores();
        this.displayScores();
        this.updateMoveHistory();
        this.displayMoveHistory();
        this.computer.adjustWeights();
        this.resetWinner();
      }
      this.displayMatchWinner();

      if (!this.playAgain()) break;

    }
    this.displayGoodbyeMessage();

  },
};

RPSGame.play();