const Calc = require('./calculator');

describe('Calc', () => {
  test('should return a 2', () => {
    expect(new Calc(1, 1).add()).toBe(2);
  });
  test('should return a 3', () => {
    expect(new Calc(1, 2).add()).toBe(3);
  });
  test('should return a 5', () => {
    expect(new Calc(3, 2).add()).toBe(5);
  });
  test('should return a 1', () => {
    expect(new Calc(3, 2).sub()).toBe(1);
  });
  test('should return a 1', () => {
    expect(new Calc(3, 3).sub()).toBe(0);
  });
  test('should return a 1', () => {
    expect(new Calc(3, 7).sub()).toBe(-4);
  });
  test('should return a 6', () => {
    expect(new Calc(3, 2).multi()).toBe(6);
  });
  test('should return a 9', () => {
    expect(new Calc(3, 3).multi()).toBe(9);
  });
  test('should return a 4', () => {
    expect(new Calc(2, 2).multi()).toBe(4);
  });
  test('should return a 1.5', () => {
    expect(new Calc(3, 2).divide()).toBe(1.5);
  });
  test('should return a 1', () => {
    expect(new Calc(2, 2).divide()).toBe(1);
  });
  test('should return a 1.5', () => {
    expect(new Calc(4, 2).divide()).toBe(2);
  });
});
