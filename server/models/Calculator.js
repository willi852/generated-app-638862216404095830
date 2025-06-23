// This model could be expanded for storing calculation history in a database
class Calculator {
  constructor() {
    this.history = [];
  }

  addToHistory(expression, result) {
    this.history.push({ expression, result });
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = Calculator;