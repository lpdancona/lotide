const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// const eqObjects = function (object1, object2) {};
const eqObjects = function (object1, object2) {
  if (object1 === object2) return true;
  if (!(object1 instanceof Object) || !(object2 instanceof Object))
    return false;
  if (object1.constructor !== object2.constructor) return false;
  for (var p in object1) {
    if (!object1.hasOwnProperty(p)) continue;
    if (!object2.hasOwnProperty(p)) return false;
    if (object1[p] === object2[p]) continue;
    if (typeof object1[p] !== "object") return false;
    if (!object_equals(object1[p], object2[p])) return false;
  }

  for (p in object2)
    if (object2.hasOwnProperty(p) && !object1.hasOwnProperty(p)) return false;
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject));
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
module.exports = eqObjects;

console.log(eqObjects(shirtObject, longSleeveShirtObject));
