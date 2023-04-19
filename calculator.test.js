const Calculator = require("./calculator");

describe("Calculator", () => {
  describe("add", () => {
    test("adds 1 + 2 to equal 3", () => {
      const calculator = new Calculator();
      expect(calculator.add(1, 2)).toBe(3);
    });

    test("adds -1 + -2 to equal -3", () => {
      const calculator = new Calculator();
      expect(calculator.add(-1, -2)).toBe(-3);
    });

    test("adds 0.1 + 0.2 to equal 0.3", () => {
      const calculator = new Calculator();
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("subtract", () => {
    test("subtracts 3 - 2 to equal 1", () => {
      const calculator = new Calculator();
      expect(calculator.subtract(3, 2)).toBe(1);
    });

    test("subtracts 0 - 0 to equal 0", () => {
      const calculator = new Calculator();
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test("subtracts 2 - 3 to equal -1", () => {
      const calculator = new Calculator();
      expect(calculator.subtract(2, 3)).toBe(-1);
    });
  });

  describe("divide", () => {
    test("divides 6 by 3 to equal 2", () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test("divides 1 by 3 to equal 0.333", () => {
      const calculator = new Calculator();
      expect(calculator.divide(1, 3)).toBeCloseTo(0.333);
    });
  });

  describe("multiply", () => {
    test("multiplies 2 by 3 to equal 6", () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies 0 by 1 to equal 0", () => {
      const calculator = new Calculator();
      expect(calculator.multiply(0, 1)).toBe(0);
    });

    test("multiplies -2 by 3 to equal -6", () => {
      const calculator = new Calculator();
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });
  });
});
