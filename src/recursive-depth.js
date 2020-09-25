const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = {
      value: 1,
      tempCounter: 1
    };
  }

  calculateDepth(arr) {
    if (!Array.isArray(arr) && this.counter.tempCounter === 0) {
      throw new Error('не массив')
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
          this.counter.value = this.counter.value < this.counter.tempCounter ? this.counter.tempCounter : this.counter.value;
          this.counter.tempCounter = 1;
          continue
        } else {
          ++this.counter.tempCounter;
          this.calculateDepth(arr[i]);
        }
      }
    }
    return this.counter.value
  }
};