const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  getCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    const currentCard = this.getCurrentCard()
    let newTurn = new Turn(guess, currentCard)
    // newTurn.giveFeedback()
    if (newTurn.giveFeedback() === 'Incorrect!') {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns++
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses.length) / this.turns * 100;
  }

}

module.exports = Round;