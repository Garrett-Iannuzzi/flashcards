const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach(() => {
    card = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
    turn = new Turn('object', card);
  });

  it('should be an instance of turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should hold a users guess', () => {
    expect(turn.userGuess).to.equal('object');
  });

  it('should hold a card with an id, question, answers, and correct answer', () => {
    expect(turn.card).to.equal(card);
  });

  it('should return the users guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the whole card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the user guess if true', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should evaluate the user guess if false', () => {
    turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback if true', () => {
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should give feedback if false', () => {
    turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

});

