const chai = require("chai");
const expect = chai.expect;
const Box = require("../src/Box");

describe("Box", function () {
  it("should return true", function () {
    expect(true).to.equal(true);
  });

  it("should have a default height and a width", function () {
    var box = new Box();

    expect(box.height).to.equal(100);
    expect(box.width).to.equal(100);
  });

  it("should be able to take in any height and width", function () {
    var box = new Box(25, 50);

    expect(box.height).to.equal(25);
    expect(box.width).to.equal(50);
  });

  it("should calculate area of the box", function () {
    var box = new Box(10, 10);

    expect(box.calculateArea()).to.equal(100);
  });

  it("should should increment the height and width of the box with a value", function () {
    var box = new Box(10, 10);

    box.increment(10, "height");
    box.increment(10, "width");

    expect(box.increment(10, "height")).to.equal(20);
    expect(box.increment(10, "width")).to.equal(20);
  });
});
