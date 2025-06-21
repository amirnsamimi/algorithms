export const longestValidSubstring = (s) => {
    if (s === "")
        throw new Error("Enter a valid string");
    if (typeof s === "number")
        throw new Error("String should not contain numbers or characters");
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        const seen = new Set();
        let vowelCount = 0;
        for (let j = i; j < s.length; j++) {
            const char = s[j];
            if (seen.has(char)) {
                break;
            }
            seen.add(char);
            if (vowels.has(char)) {
                vowelCount++;
            }
            if (vowelCount > 0 && vowelCount % 2 === 0) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }
    return maxLen;
};
