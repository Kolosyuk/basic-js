const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, counter = 1) {
    return counter = arr.length !== 0 ? Math.max(...arr.map((item) => {
      return item = Array.isArray(item) ? this.calculateDepth(item, counter + 1) : counter
    })) : counter;
  }
};

