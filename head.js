const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function (arr) {
  let y = arr[0];
  return y;
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
