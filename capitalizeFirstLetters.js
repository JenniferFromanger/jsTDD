const assert = require("assert");
const capitalizeFirstLetters = (input) => {
  input = input.split(" ");
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].substr(1);
  }
  return input.join(" ");
};

assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("f"), "F");
assert.strictEqual(capitalizeFirstLetters(""), "");
