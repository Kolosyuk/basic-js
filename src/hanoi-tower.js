const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let movesCounter = Math.pow(2, diskNumber) - 1;
  let needSeconds = Math.floor((movesCounter / turnsSpeed) * 60 * 60);
  let result = {};
  result.turns = movesCounter;
  result.seconds = needSeconds;
  return result
};
