const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected))
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
};
const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) console.log("True");
  else console.log("False");
};
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (sentence[i] === " ") {
    } else if (!results[key]) {
      results[key] = [i];
    } else {
      results[key].push(i);
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
