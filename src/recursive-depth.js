const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = {
      index: undefined,
      value: 1
    };
  }

  calculateDepth(arr) {
    if (!Array.isArray(arr) && this.counter.value === 0) {
      throw new Error('не массив')
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {

          continue
        } else {
          ++this.counter.value;
          this.calculateDepth(arr[i]);
        }
      }
    }
    console.log(this.counter.value);
    return this.counter.value
  }
};