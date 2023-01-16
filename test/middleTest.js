const assert = require("chai").assert;
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
// console.log(middle([1]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert(middle([1]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert(middle([1, 2, 3]), [2]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
