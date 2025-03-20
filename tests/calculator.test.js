const calculator = require('../src/calculator');

describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(2, 5)).toBe(-3);
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test('multiplies two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 4)).toBe(-4);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test('divides two numbers correctly', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
  });
}); 