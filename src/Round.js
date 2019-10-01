const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
  }

  getCurrentCard() {
    return this.deck[this.turns]
  }

}

module.exports = Round;