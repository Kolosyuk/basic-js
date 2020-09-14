const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const options = ["winter", "spring", "summer", "autumn", "Unable to determine the time of year!"]
  if (date === null || date === undefined) { return options[4] }
  let strDate = date.toDateString();
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
