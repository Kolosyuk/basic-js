const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.isStraight = isStraight
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error('ERROR!!')
    let arrKeyCodeNewLength = 0;
    let arrKeyCode = key.split('').map((item) => {
      return item = item.toUpperCase().charCodeAt() - 65
    });
    message = message.split('').map((item) => {
      if (!/^[a-z]$/gi.test(item)) {
        return item = item.charCodeAt()
      } else {
        if (arrKeyCodeNewLength === arrKeyCode.length) arrKeyCodeNewLength = 0
        item = item.toUpperCase().charCodeAt() + arrKeyCode[arrKeyCodeNewLength]
        arrKeyCodeNewLength++;
        return item
      }
    }).map((item) => {
      item = !(item > 90) ? item : item - 26
      return String.fromCharCode(item)
    });
    return this.isStraight ? message.join('') : message.reverse().join('')
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error('ERROR!!')
    let arrKeyCodeNewLength = 0;
    let arrKeyCode = key.split('').map((item) => {
      return item = item.toUpperCase().charCodeAt() - 65
    });
    message = message.split('').map((item) => {
      if (!/^[a-z]$/gi.test(item)) {
        return item = item.charCodeAt() + 200
      } else {
        if (arrKeyCodeNewLength === arrKeyCode.length) arrKeyCodeNewLength = 0
        item = item.toUpperCase().charCodeAt() - arrKeyCode[arrKeyCodeNewLength]
        arrKeyCodeNewLength++;
        return item
      }
    }).map((item) => {
      item = (item < 65) ? item + 26 : item > 200 ? item - 200 : item
      return String.fromCharCode(item)
    });
    return this.isStraight ? message.join('') : message.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
