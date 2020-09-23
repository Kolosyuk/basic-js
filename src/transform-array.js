const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('ERROR');
  let newArr = [...arr];
  let res;
  for (let i = 0; i < arr.length; i++) {

    if (newArr[i] === '--discard-next' && i === newArr.length - 1) {
      newArr[i] = 'discard';
      continue
    }
    if (newArr[i] === '--discard-next' && i !== newArr.length - 1) {
      newArr[i] = 'discard';
      newArr[i + 1] = 'discard';
      continue;
    }

    if (newArr[i] === '--discard-prev' && i === 0) {
      newArr[i] = 'discard';
      continue;
    }

    if (newArr[i] === '--discard-prev' && i !== 0) {
      newArr[i - 1] = 'discard';
      newArr[i] = 'discard';
      continue;
    }

    if (newArr[i] === '--double-next' && i === newArr.length - 1) {
      newArr[i] = 'discard';
      continue;
    }

    if (newArr[i] === '--double-next' && i !== newArr.length - 1) {
      newArr[i] = arr[i + 1];
      continue;
    }

    if (newArr[i] === '--double-prev' && i === 0) {
      newArr[i] = 'discard';
      continue;
    }
    if (newArr[i] === '--double-prev' && i !== 0) {
      newArr[i] = newArr[i - 1];
      continue;
    }
  }
  res = newArr.filter(item => item !== 'discard');
  return res
};