const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const Card = require('../src/Card');

describe('Game', () => {
  let card, card2, card3;
  let deck;
  let game;

  beforeEach(() => {
    card = new Card({ id: 2, question: "What is a comma-separated list of related values?", answers: ["array", "object", "function"], correctAnswer: "array"});
    card2 = new Card({ id: 3, question: "What type of prototype method directly modifies the existing array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "mutator method" });
    card3 = new Card({ id: 4, question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "accessor method" });
    deck = new Deck([card, card2, card3]);
    round = new Round(deck);
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  });

  // it('should count how many rounds', () => {
  //   expect(game.roundCounter).to.equal(0);
  //   game.startGame();
  //   expect(game.roundCounter).to.equal(1);
  // });

  // it('should create a new deck', () => {
  //   game.startGame();
  //   expect(game.startGame()).to.equal(game)
  // });

  // it('should create a new round', () => {

  // });

});