const Turn = require('../src/Turn');
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  getCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.getCurrentCard();
    let newTurn = new Turn(guess, currentCard);
    if (newTurn.giveFeedback() === 'Incorrect!') {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns++;
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Number(((this.turns - this.incorrectGuesses.length) / this.turns * 100).toFixed(0));
  }

  endRound() {
    console.log(`*** Round over! *** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    if (this.calculatePercentCorrect() < 90) {
      console.log('*** Must score above 90% to end game! ***');
      this.resetGame();
    } else {
      console.log('*** Over 90%, GREAT JOB! GAME OVER! ***');
      util.endGame();
    }
  }

  resetGame() {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = this.deck;
    util.main(this);
  }

}

module.exports = Round;