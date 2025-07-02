import { bubbleSort } from "./bubblesort.js";

describe("bubbleSort", () => {
  test("should sort an array of numbers in ascending order", () => {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const sortedNums = bubbleSort(nums);
    expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
