import { sumOfFactorials } from "./sof.js";

describe("sumOfFactorials", () => {
  test("returns 0 when n is 0", () => {
    expect(sumOfFactorials(0)).toBe(0);
  });

  test("returns 1 when n is 1", () => {
    expect(sumOfFactorials(1)).toBe(1); // 1!
  });

  test("correctly sums factorials up to 4", () => {
    expect(sumOfFactorials(4)).toBe(33); // 1!+2!+3!+4! = 33
  });

  test("correctly sums factorials up to 5", () => {
    expect(sumOfFactorials(5)).toBe(153); // 1!+2!+3!+4!+5! = 153
  });

  test("throws error for negative input", () => {
    expect(() => sumOfFactorials(-1)).toThrow("Input must be a non-negative integer");
  });
});
