import { maxGroupLengthSum } from "./maxGroupLengthSum.js";

describe("maximum groups of equal sums in an array", () => {
  test("array of same numbers", () => {
    expect(maxGroupLengthSum([3, 3, 3, 3])).toBe(4);
  });

  test("array of different numbers", () => {
    expect(maxGroupLengthSum([1, 2, 3, 4, 5, 6])).toBe(3);
  });

  test("array of different numbers which will only make one group", () => {
    expect(maxGroupLengthSum([1, 2, 3, 8])).toBe(1);
  });
});
