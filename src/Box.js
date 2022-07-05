class Box {
  constructor(height = 100, width = 100) {
    this.height = height || 100;
    this.width = width || 100;
  }
  calculateArea() {
    return this.height * this.width;
  }
  increment(num, val) {
    return this[val] + num;
  }
}

module.exports = Box;
