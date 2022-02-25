/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * https://leetcode.com/problems/is-subsequence/
 */
var isSubsequence = function (s, t) {

    const len = t.length;
    let smallIndex = 0
    for (let i = 0; i < len; i++) {
        if (t.charAt(i) === s.charAt(smallIndex)) smallIndex++;
    }

    return s.length === smallIndex ? true : false;

};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));