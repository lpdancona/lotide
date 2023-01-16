const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// eslint-disable-next-line func-style
function findKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
module.exports = findKeyByValue;
