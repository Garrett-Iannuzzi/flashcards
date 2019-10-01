const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card, card2, card3;
  let deck;
  let round; 

  beforeEach(() => {
    card = new Card({ id: 2, question: "What is a comma-separated list of related values?", answers: ["array", "object", "function"], correctAnswer: "array"});
    card2 = new Card({ id: 3, question: "What type of prototype method directly modifies the existing array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "mutator method" });
    card3 = new Card({ id: 4, question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "accessor method" });
    deck = new Deck([card, card2, card3]);
    round = new Round(deck);
  });

  it('should have a deck of cards', () => {
    expect(round.deck).to.eql(deck.cards)
  });

  it('should be able to get the current card', () => {
    expect(round.getCurrentCard()).to.equal(card)
  })





})

