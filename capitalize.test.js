const capitalize = require('./capitalize');
describe('capitalize', () => {
  test('should return the first character capitalized', () => {
    expect(capitalize('String')).toBe('String');
  });
  test('this function accept string argument', () => {
    expect(() => capitalize([2, 4])).toThrow('argument is not string');
  });
});
