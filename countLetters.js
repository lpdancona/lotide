const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function (word, wordsToCount) {
  let result = {};
  for (let i = 0; i <= word.length; i++) {
    // console.log(allItems[i]);
    let key = word[i];
    if (wordsToCount[key]) {
      if (result[key]) {
        result[key] += 1;
      } else {
        result[key] = 1;
      }
    }
  }
  console.log(result);
  return result;
};
const firstNames = "lighthouse Labs";

const result1 = countLetters(firstNames, {
  a: true,
  k: true,
  f: true,
  g: false,
});
