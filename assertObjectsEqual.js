const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
  }
};
// const eqObjects = function (object1, object2) {};
const assertObjectsEqual = function (actual, expected) {
  if (actual === expected) return `✅✅✅Assertion Passed: actual === expected`;
  if (!(actual instanceof Object) || !(expected instanceof Object))
    return `🟥🟥🟥Assertion Failed: actual !== expected`;
  if (actual.constructor !== expected.constructor)
    return `🟥🟥🟥Assertion Failed: actual !== expected`;
  for (var p in actual) {
    if (!actual.hasOwnProperty(p)) continue;
    if (!expected.hasOwnProperty(p))
      return `🟥🟥🟥Assertion Failed: actual !== expected`;
    if (actual[p] === expected[p]) continue;
    if (typeof actual[p] !== "object")
      return `🟥🟥🟥Assertion Failed: actual !== expected`;
    if (!object_equals(actual[p], expected[p]))
      return `🟥🟥🟥Assertion Failed: actual !== expected`;
  }
  for (p in expected)
    if (expected.hasOwnProperty(p) && !actual.hasOwnProperty(p))
      return `🟥🟥🟥Assertion Failed: actual !== expected`;
  return `✅✅✅Assertion Passed: actual === expected`;
};
module.exports = assertObjectsEqual;
