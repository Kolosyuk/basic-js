const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === null || date === undefined) { return "Unable to determine the time of year!" }
  let strDate = date.toDateString();
  let options = ["winter", "spring", "summer", "autumn", "Unable to determine the time of year!"]
  switch (strDate.substring(4, 7)) {
    case 'Jan':
    case 'Feb':
    case 'Dec':
      return options[0]
      break;
    case 'Mar':
    case 'Apr':
    case 'May':
      return options[1]
      break;
    case 'Jun':
    case 'Jul':
    case 'Aug':
      return options[2]
      break;
    case 'Sep':
    case 'Oct':
    case 'Nov':
      return options[3]
      break;
    default:
      return options[4]
  };
};
