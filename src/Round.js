const Turn = require('../src/Turn');
// const Game = require('../src/Game');

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
    return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;