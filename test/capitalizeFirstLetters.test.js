const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirst", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("capitalize the first character of each word", () => {
    assert.strictEqual(
      capitalizeFirstLetters("i am learning TDD"),
      "I Am Learning TDD"
    );
  });

  it("works with a 1-character string", () => {
    assert.strictEqual(capitalizeFirstLetters("f"), "F");
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
