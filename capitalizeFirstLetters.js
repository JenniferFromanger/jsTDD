function capitalizeFirstLetters(input) {}

const assert = require("assert");
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("f"), "F");
assert.strictEqual(capitalizeFirstLetters(""), "");
