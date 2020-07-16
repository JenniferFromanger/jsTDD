const assert = require("assert");
const Rectangle = require("../Rectangle");
const rectangle = new Rectangle(10, 5);
const rectangle2 = new Rectangle(5, 5);

describe("isSquare", () => {
  it("is a Square", () => {
    assert.strictEqual(rectangle2.isSquare((this.a = this.b)), true);
  });

  it("is not a Square", () => {
    assert.strictEqual(rectangle.isSquare((this.a = this.b)), false);
  });
});

describe("getArea", () => {
  it("return the rectangle area", () => {
    assert.strictEqual(rectangle.getArea(this.a * this.b), 50);
  });
});

describe("getPerimeter", () => {
  it("return the rectangle perimeter", () => {
    assert.strictEqual(rectangle.getPerimeter(2 * (this.a + this.b)), 30);
  });
});
