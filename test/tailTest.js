const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const tail = require("../tail");
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(["word", "lettuce", "burguer"]));
describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns [lettuce, burguer] for [word, lettuce, burguer]", () => {
    assert.deepEqual(tail(["word", "lettuce", "burguer"]), [
      "lettuce",
      "burguer",
    ]);
  });
});
