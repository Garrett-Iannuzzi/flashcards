class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card; 
  }

  returnGuess() {
    return this.userGuess
  }

  returncard() {
    return this.card
  }

  evaluateGuess() {
    
  }

  giveFeedback() {

  }

}
module.exports = Turn;