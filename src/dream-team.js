const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = "";
  if (members !== null && typeof members === 'object' && members.length) {
    return result = members
      .filter(item => typeof item === 'string')
      .reduce((acc, item) => {
        return acc.concat(item.trim()[0].toUpperCase())
      }, [])
      .sort()
      .join('')
  } else {
    return false;
  }
};