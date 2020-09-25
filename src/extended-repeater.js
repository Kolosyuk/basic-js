const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {
  let stringed = String(str);
  let res = "";

  if (addition === "") {
    for (let i = 0; i < repeatTimes; i++) {
      res += stringed;
      console.log(res);
      if (i === repeatTimes - 1) {
        continue;
      }
      res += separator;
    }
  } else {
    for (let i = 0; i < repeatTimes; i++) {
      res += stringed +
        addConst(addition, additionRepeatTimes, additionSeparator);
      if (i === repeatTimes - 1) {
        continue;
      }
      res += separator;
    }
  }
  return res;
}

function addConst(addition, additionRepeatTimes = 1, additionSeparator = "|") {
  let res = [];
  for (i = 0; i < additionRepeatTimes; i++) {
    res.push(String(addition));
    if (i !== additionRepeatTimes - 1) {
      res.push(additionSeparator);
    }
  }
  return res.join("");
}
