class Calc {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  // Method
  add() {
    return this.a + this.b;
  }
  sub() {
    return this.a - this.b;
  }
  multi() {
    return this.a * this.b;
  }
  divide() {
    return this.a / this.b;
  }
}

module.exports = Calc;
