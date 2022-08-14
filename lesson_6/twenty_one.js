const readline = require('readline-sync');
const DECK_OF_CARDS = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'],
  ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'],
  ['H', 'Q'], ['H', 'K'], ['H', 'A'], ['D', '2'], ['D', '3'],
  ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'],
  ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'],
  ['D', 'A'], ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'],
  ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'],
  ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'], ['S', '2'],
  ['S', '3'], ['S', '4'], ['S', '5'], ['H', '6'], ['S', '7'],
  ['S', '8'], ['S', '9'], ['S', '10'], ['H', 'J'], ['S', 'Q'],
  ['S', 'K'], ['S', 'A']
];

const WINNING_POINTS = 21;
const DEALER_STOPS_HITTING = 17;
const GAMES_TO_WIN_MATCH = 5;
const JACK_QUEEN_KING_VALUE = 10;
const ACE_MAX_VALUE = 11;
const ACE_MIN_VALUE = 1;
const NUMBER_OF_WINS = {player: 0, dealer: 0};
const PLAYER_HAND = [];
const DEALER_HAND = [];

function prompt(message) {
  console.log(`=> ${message}`);
}

function greeting() {
  console.clear();
  console.log('=== Welcome to Twenty-One ===');
  prompt(`First to ${WINNING_POINTS} points wins a game.`);
  prompt(`First to ${GAMES_TO_WIN_MATCH} games wins the match.`);
  console.log('');
}

function promptFirstGameStart() {
  prompt(`Shall we kick-off our first game? (y / n)`);
  let answer = readline.prompt().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    prompt('Please enter y or n.');
    answer = readline.prompt().toLowerCase();
  }
  return answer;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
}

function initializeDeck () {
  let gameDeck = [];

  for (let index = 0; index < DECK_OF_CARDS.length; index++) {
    gameDeck[index] = DECK_OF_CARDS[index];
  }
  return shuffle(gameDeck);
}

// turn cards into legible words for printing to the console.
function cardNames(array) {

  let newArray = array.map(value => {
    switch (value) {
      case 'J':
        return 'Jack';
      case 'Q':
        return 'Queen';
      case 'K':
        return 'King';
      case 'A':
        return 'Ace';
      default:
        return value;
    }
  });
  return newArray;
}

// turn suits into legible words for printing to the console.
function suitNames(array) {

  let newArray = array.map(value => {
    switch (value) {
      case 'H':
        return 'Hearts';
      case 'S':
        return 'Spades';
      case 'C':
        return 'Clubs';
      case 'D':
        return 'Diamonds';
      default:
        return value;
    }
  });
  return newArray;
}

// deals cards to each user
function dealCards(deck, hand, cardsDealt = 1) {

  // eslint-disable-next-line id-length
  for (let i = 1; i <= cardsDealt; i++) {
    let dealtCard = deck.shift();
    hand.push(dealtCard);
  }
}

// prints the current hand to the console.
function displayCards(hand, contestant) {
  let newArray = [];
  hand.forEach(card => {
    newArray.push(suitNames(cardNames(card)));
  });

  if (contestant === 'player') {
    prompt(`Your hand: ${calculateScore(hand)}`);
    newArray.forEach(card => {
      console.log(`\t ${card[1]} of ${card[0]}`);
    });
    console.log('');
  } else {
    prompt(`Dealers hand: ***`);
    console.log(`\t ${newArray[0][1]} of ${newArray[0][0]}`);
    console.log(`\t Unknown\n`);
  }
}

function calculateScore(hand) {

  let values = hand.map(card => card[1]);

  let pointTally = 0;
  values.forEach(value => {
    if (value === 'A') {
      pointTally += ACE_MAX_VALUE;
    } else if (['J', 'Q', 'K'].includes(value)) {
      pointTally += JACK_QUEEN_KING_VALUE;
    } else {
      pointTally += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    // eslint-disable-next-line max-len
    if (pointTally > WINNING_POINTS) pointTally -= (ACE_MAX_VALUE - ACE_MIN_VALUE);
  });

  return pointTally;
}

function busted(hand) {
  return (calculateScore(hand) > WINNING_POINTS);
}

function detectResult(player, dealer) {
  let playerScore = calculateScore(player);
  let dealerScore = calculateScore(dealer);

  if (playerScore > WINNING_POINTS) {
    return 'PLAYER_BUSTED';
  } else if (dealerScore > WINNING_POINTS) {
    return 'DEALER_BUSTED';
  } else if (dealerScore < playerScore) {
    return 'PLAYER';
  } else if (dealerScore > playerScore) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayGameResult(player, dealer) {
  let result = detectResult(player, dealer);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt(`Dealer busts. You win!`);
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
  console.log('=============================');
}

function adjustWinTotals(player, dealer) {
  let result = detectResult(player, dealer);

  if (result === 'DEALER_BUSTED' || result === 'PLAYER') {
    NUMBER_OF_WINS.player += 1;
  } else if (result === 'PLAYER_BUSTED' || result === 'DEALER') {
    NUMBER_OF_WINS.dealer += 1;
  }
}

// print the final results to the console.
function displayMatchWinner() {
  if (NUMBER_OF_WINS.player === GAMES_TO_WIN_MATCH) {
    prompt(`You won the match by a score of ${NUMBER_OF_WINS.player} games to ${NUMBER_OF_WINS.dealer}`);
  } else if (NUMBER_OF_WINS.dealer === GAMES_TO_WIN_MATCH) {
    prompt(`Dealer won the match by a score of ${NUMBER_OF_WINS.dealer} games to ${NUMBER_OF_WINS.player}`);
  }
}

//ask user if they want to play another match
function playAgain() {
  prompt('Great match!');
  prompt(`Do you want to play another best out of ${GAMES_TO_WIN_MATCH} match? (y or n)`);
  let answer = readline.question().toLowerCase()[0];

  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    prompt('Please enter y or n.');
    answer = readline.prompt().toLowerCase();
  }
  console.clear();
  return answer;
}

// resets the total number of games back to zero at the end of a match/
function resetGameTotals() {
  NUMBER_OF_WINS.player = 0;
  NUMBER_OF_WINS.dealer = 0;
  console.clear();
}

function playerChoosesHit(deck, hand) {
  dealCards(deck, hand);
  displayCards(hand, 'player');
  displayCards(hand, 'dealer');
}

function playerChoosesStay(hand) {
  prompt("You chose to stay!");
  displayCards(hand, 'player');
  displayCards(hand, 'dealer');
}

function displayGameTotals () {
  prompt(`Current game totals are...Player: ${NUMBER_OF_WINS.player}, Dealer: ${NUMBER_OF_WINS.dealer}`);
  displayNextGame();
}

// pause before launching into next game
function displayNextGame() {
  prompt('Hit enter to continue.');
  readline.prompt().toLowerCase();
  console.clear();
}

// game engine
function playGame(deck) {
  dealCards(deck, PLAYER_HAND, 2);
  dealCards(deck, DEALER_HAND, 2);

  displayCards(PLAYER_HAND, 'player');
  displayCards(DEALER_HAND, 'dealer');

  let answer = hitOrStayQuestion();
  playerTurn(answer, deck);

  if (!busted(PLAYER_HAND)) dealerTurn(deck);

  adjustWinTotals(PLAYER_HAND, DEALER_HAND);
  displayGameResult(PLAYER_HAND, DEALER_HAND);
  setPlayersCardToZero();

}

function hitOrStayQuestion() {
  prompt('Do you want to hit or stay?');
  let answer = readline.prompt().toLowerCase();

  while (!['hit', 'h', 'stay', 's'].includes(answer)) {
    prompt('Please enter h or s.');
    answer = readline.prompt().toLowerCase();
  }
  console.clear();
  return answer;
}

function playerTurn(hitOrStayResponse, deck) {
  while (['hit', 'h'].includes(hitOrStayResponse)) {
    playerChoosesHit(deck, PLAYER_HAND);
    if (busted(PLAYER_HAND)) break;
    hitOrStayResponse = hitOrStayQuestion();
  }

  if (['stay', 's'].includes(hitOrStayResponse)) {
    playerChoosesStay(PLAYER_HAND);
  }

}

function dealerTurn(deck) {
  while (true) {
    if (calculateScore(DEALER_HAND) < DEALER_STOPS_HITTING) {
      prompt('Dealer chooses to hit.');
      dealCards(deck, DEALER_HAND);
    } else break;
  }

  if (calculateScore(DEALER_HAND) <= WINNING_POINTS) {
    prompt('Dealer chooses to stay');
  }

}

// resets each hand before the next game
function setPlayersCardToZero() {
  while (PLAYER_HAND.length > 0) {
    PLAYER_HAND.pop();
  }
  while (DEALER_HAND.length > 0) {
    DEALER_HAND.pop();
  }
}

function displayExitMessage() {
  prompt('Thanks for playing Twenty One!');
}

// START OF GAME

greeting();

let answer = promptFirstGameStart();

if (['n', 'no'].includes(answer)) {
  prompt('No worries, see you next time');
  return;
}

while (true) {
  console.clear();
  let gameDeck = initializeDeck();

  playGame(gameDeck);
  displayGameTotals();

  if (NUMBER_OF_WINS.player === GAMES_TO_WIN_MATCH ||
    NUMBER_OF_WINS.dealer === GAMES_TO_WIN_MATCH) {
    displayMatchWinner();

    if (!playAgain()) {
      break;
    } else {
      resetGameTotals();
    }
  }
}

displayExitMessage();

