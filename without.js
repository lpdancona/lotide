const without = function (source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};
module.exports = without;
const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected))
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
};
