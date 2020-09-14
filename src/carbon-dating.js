const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false
  if (isNaN(parseFloat(sampleActivity))) return false
  if (parseFloat(sampleActivity) <= 0) return false
  if (parseFloat(sampleActivity) > 15) return false
  if (sampleActivity === null) return false
  if (sampleActivity === undefined) return false
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693)



  // if (sampleActivity !== null) return false
  // if sampleActivity !== undefined && typeof sampleActivity === 'string') {
  //   return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693)
  // } else {
  //   return false
  // }
};
