const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

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
    var newTurn = new Turn(guess, currentCard)
    // newTurn.giveFeedback()
    // if (newTurn.giveFeedback() === 'Incorrect!') {
    //   this.incorrectGuesses.push(this.deck[this.turns].id);
    // }
    this.turns++
    return newTurn.giveFeedback();
  }

}

module.exports = Round;