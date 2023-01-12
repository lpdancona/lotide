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
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
