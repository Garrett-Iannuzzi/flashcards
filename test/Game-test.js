const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let round;
  let deck;
  let game;

  beforeEach(() => {
    card = new Card({ id: 2, question: "What is a comma-separated list of related values?", answers: ["array", "object", "function"], correctAnswer: "array"});
    card2 = new Card({ id: 3, question: "What type of prototype method directly modifies the existing array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "mutator method" });
    card3 = new Card({ id: 4, question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "accessor method" });
    deck = new Deck([card, card2, card3]);
    round = new Round(deck);
    game = new Game();


  })





})