const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function (arr) {
  const copyWithoutFirst = arr.slice(1);
  return copyWithoutFirst;
};
module.exports = tail;
