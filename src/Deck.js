class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  getAmountOfCards() {
    return this.cards.length;
  }
}

module.exports = Deck;