const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (let i = 0; i <= allItems.length; i++) {
    // console.log(allItems[i]);
    let key = allItems[i];
    if (itemsToCount[key]) {
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
module.exports = countOnly;
