const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.isStraight = isStraight
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error('ERROR!!')
    let upMessage = [...message.toUpperCase()];
    let arrKeyCodeNewLength = 0;
    let arrKeyCode = key.toUpperCase().split('').map((item) => item.charCodeAt() - 'A'.charCodeAt());
    upMessage = upMessage.map((item) => {
      if (!/^[A-Z]/.test(item)) {
        return item
      } else {
        if (arrKeyCodeNewLength === arrKeyCode.length) arrKeyCodeNewLength = 0
        item = String.fromCharCode((item.charCodeAt() + arrKeyCode[arrKeyCodeNewLength]) <= 'Z'.charCodeAt() ?
          item.charCodeAt() + arrKeyCode[arrKeyCodeNewLength] :
          item.charCodeAt() + arrKeyCode[arrKeyCodeNewLength] - 26)
        arrKeyCodeNewLength++;
        return item
      }
    })
    return this.isStraight ? upMessage.join('') : upMessage.reverse().join('')
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error('ERROR!!')
    let upMessage = [...message.toUpperCase()];
    let arrKeyCodeNewLength = 0;
    let arrKeyCode = key.split('').map((item) => item.toUpperCase().charCodeAt() - 'A'.charCodeAt());
    upMessage = upMessage.map((item) => {
      if (!/^[A-Z]/.test(item)) {
        return item
      } else {
        if (arrKeyCodeNewLength === arrKeyCode.length) arrKeyCodeNewLength = 0
        item = String.fromCharCode(!(item.charCodeAt() - arrKeyCode[arrKeyCodeNewLength] < 'A'.charCodeAt()) ?
          item.charCodeAt() - arrKeyCode[arrKeyCodeNewLength] :
          item.charCodeAt() - arrKeyCode[arrKeyCodeNewLength] + 26)
        arrKeyCodeNewLength++;
        return item
      }
    })
    return this.isStraight ? upMessage.join('') : upMessage.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
