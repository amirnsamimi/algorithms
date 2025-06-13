export function longestValidSubstring(s) {
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
}
// console.log(longestValidSubstring("aeiouxyz"));
// export function longestValidSubstring(s) {
//     const vowels = new Set(["a", "e", "i", "o", "u"]);
//     let maxLen = 0;
//     let left = 0;
//     const charIndices = new Map(); // To track the last index of each character
//     let vowelCount = 0;
//     for (let right = 0; right < s.length; right++) {
//         const char = s[right];
//         // If the character is already in the current window, move the left pointer
//         if (charIndices.has(char) && charIndices.get(char) >= left) {
//             left = charIndices.get(char) + 1;
//         }
//         charIndices.set(char, right); // Update the last index of the character
//         // Update vowel count
//         if (vowels.has(char)) {
//             vowelCount++;
//         }
//         // Check if the current window meets the conditions
//         while (left <= right) {
//             const currentVowelCount = Array.from(charIndices.keys())
//                 .filter(c => vowels.has(c) && charIndices.get(c) >= left)
//                 .length;
//             if (currentVowelCount > 0 && currentVowelCount % 2 === 0) {
//                 maxLen = Math.max(maxLen, right - left + 1);
//                 break;
//             } else {
//                 // If not, try to move the left pointer to find a valid window
//                 const leftChar = s[left];
//                 if (vowels.has(leftChar)) {
//                     vowelCount--;
//                 }
//                 left++;
//             }
//         }
//     }
//     return maxLen;
// }
