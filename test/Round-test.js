const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {
  let turn;
  let card;
  let deck;
  let round; 

  beforeEach()
  turn = new Turn();
  card = new Card({ id: 2, question: "What is a comma-separated list of related values?", answers: ["array", "object", "function"], correctAnswer: "array"});
  card2 = new Card({ id: 3, question: "What type of prototype method directly modifies the existing array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "mutator method" });
  card3 = new Card({ id: 4, question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "accessor method" });
  deck = new Deck([card, card2, card3]);
  round = new Round(deck);
  
})

