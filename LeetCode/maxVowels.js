/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * //Naive Solution
 */
// var maxVowels = function (s, k) {

//     let maxVowelCount = 0;
//     for (let i = 0; i <= s.length - k; i++) {
//         maxVowelCount = Math.max(maxVowelCount, (s.slice(i, i + k).match(/[aeiou]/g) || []).length);
//     }

//     return maxVowelCount;

// };

//Efficient Solution - Sliding Window
//https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/discuss/648458/C%2B%2BPy3-Explained-w-Diagram-Sliding-Window
var maxVowels = function (s, k) {
    let ans = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0, winCnt = 0; i < s.length; ++i) {
        if (vowels.has(s.charAt(i))) {
            ++winCnt;
        }
        if (i >= k && vowels.has(s.charAt(i - k))) {
            --winCnt;
        }
        ans = Math.max(winCnt, ans);
    }
    return ans;

};




console.log(maxVowels("abciiidef", 3));

// console.log(maxVowels("aeiou", 2));

// console.log(maxVowels("leetcode", 3));
// console.log(maxVowels("weallloveyou", 7));

