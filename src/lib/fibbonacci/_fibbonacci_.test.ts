import  fibbo  from "./fibbonacci.js"

describe('fibonacci', () => {
  test('should return 0 for n = 0', () => {
    expect(fibbo(0)).toBe(0);
  });

  test('should return 1 for n = 1', () => {
    expect(fibbo(1)).toBe(1);
  });

  test('should return 1 for n = 2', () => {
    expect(fibbo(2)).toBe(1);
  });

  test('should return 5 for n = 5', () => {
    expect(fibbo(5)).toBe(5);
  });

  test('should return 13 for n = 7', () => {
    expect(fibbo(7)).toBe(13);
  });

  test('should handle larger numbers like n = 10', () => {
    expect(fibbo(10)).toBe(55);
  });
});
