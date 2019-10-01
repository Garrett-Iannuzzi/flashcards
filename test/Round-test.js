const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

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
    expect(round.deck).to.eql(deck.cards);
  });

  it('should be able to get the current card', () => {
    expect(round.getCurrentCard()).to.equal(card);
  });

  it('should count each turn', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });
  
  it('should create a new new turn after each guess', () => {
    expect(round.getCurrentCard()).to.eql(card);
    round.takeTurn();
    expect(round.getCurrentCard()).to.eql(card2);
    round.takeTurn();
    expect(round.getCurrentCard()).to.eql(card3);
  });

  it('should store all the incorrect guesses', () => {
    turn = new Turn('object', card);
    expect(round.incorrectGuesses).to.eql([]);
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.eql([2]);
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('accessor method');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should have a message when the round is over', () => {
    round.takeTurn('array');
    round.takeTurn('mutator method');
    round.takeTurn('iteration method');
    round.endRound()
    expect(round.endRound()).to.equal(console.log(`** Round over! ** You answered ${66}% of the questions correctly!`))
  });

});

