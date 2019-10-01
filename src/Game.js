const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.roundCounter = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.getAmountOfCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  startGame() {
    this.roundCounter++
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round)
  }
}

module.exports = Game;