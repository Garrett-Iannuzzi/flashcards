const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let deck;
  let card;
  let card2;
  let card3;

  beforeEach(() => {
    card = new Card({ id: 2, question: "What is a comma-separated list of related values?", answers: ["array", "object", "function"], correctAnswer: "array"});
    card2 = new Card({ id: 3, question: "What type of prototype method directly modifies the existing array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "mutator method" });
    card3 = new Card({ id: 4, question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "accessor method" });
    deck = new Deck([card, card2, card3]);
  });

  it('should be a fucntion', () => {
    expect(Deck).to.be.a('function');
  });

  it('should hold cards', () => {
    expect(deck.cards).to.eql([card, card2, card3]);
  });

  it('should know how many cards are in the deck', () => {
    expect(deck.getAmountOfCards()).to.eql(3);
  });
});