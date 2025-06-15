import { longestValidSubstring } from "./longestVowelsValidSubString.js";

describe("longestValidSubstring", () => {
  test("'abciiidef': longest valid substring has 4 unique characters and 2 vowels", () => {
    expect(longestValidSubstring("abciiidef")).toBe(4);
  });

  test("No valid substring found: No substring contains a non-zero even number of vowels", () => {
    expect(longestValidSubstring("abcabcbb")).toBe(0);
  });

  test("'aeiouxyz' is valid since it contains 4 vowels, which is an even number", () => {
    expect(longestValidSubstring("aeiouxyz")).toBe(7);
  });
  test("throws error when input is an empty string", () => {
    expect(() => longestValidSubstring("")).toThrow("Enter a valid string");
  });

  test("throws error when input is a number (should be string)", () => {
    // @ts-expect-error testing invalid input type intentionally
    expect(() => longestValidSubstring(123)).toThrow(
      "String should not contain numbers or characters"
    );
  });
});
