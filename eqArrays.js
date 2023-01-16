const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual) == JSON.stringify(expected)) console.log("True");
  else console.log("False");
};
module.exports = eqArrays;
