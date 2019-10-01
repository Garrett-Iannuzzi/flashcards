const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.roundCounter = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  startGame() {
    deck = new Deack(prototypeQuestions);
    round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round)
    this.roundCounter++
  }
}

module.exports = Game;