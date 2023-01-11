const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected))
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
};
const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) console.log("True");
  else console.log("False");
};
const middle = function (arr) {
  if (arr.length <= 2) return [];
  let index = Math.floor(arr.length / 2);
  if (arr.length % 2 == 0) {
    return [arr[index - 1], arr[index]];
  } else {
    return [arr[index]];
  }
};
console.log(middle([1]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6]));
