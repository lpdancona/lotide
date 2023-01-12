const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---");
  }
  return results;
};
const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected))
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
};
const sum2 = function (x) {
  x = x + 2;
  return x;
};
const numb = [93, 698, 3, 150, 290, 50, 885, 98, 6, 7, 42];
const words = ["ground", "ground", "ground"];
console.log(map(numb, sum2));
