/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 * https://leetcode.com/problems/split-two-strings-to-make-palindrome/submissions/
 */
var checkPalindromeFormation = function (a, b) {
    if (palindrome(a) || palindrome(b)) {
        return true;
    }

    if (prefixCheck(a, b)) return true;
    if (suffixCheck(a, b)) return true;
    return false;

};


const palindrome = (s1, start, end) => {

    start = start || 0;
    end = end || s1.length - 1;
    while (start < end) {
        if (s1.charAt(start++) !== s1.charAt(end--)) return false;
    }
    return true;

}


const prefixCheck = (s1, s2) => {

    let start = 0, end = s1.length - 1;
    while (start < end && s1.charAt(start) === s2.charAt(end)) {
        start++; end--;
    }
    return palindrome(s1, start, end) || palindrome(s2, start, end);

}

const suffixCheck = (s1, s2) => {

    let start = 0, end = s1.length - 1;
    while (start < end && s1.charAt(end) === s2.charAt(start)) {
        start++; end--;
    }
    return palindrome(s1, start, end) || palindrome(s2, start, end);

}

console.log(checkPalindromeFormation("ulacfd", "jizalu"));
console.log(checkPalindromeFormation("xbdef", "xecab"));
console.log(checkPalindromeFormation("113", "112"));
console.log(checkPalindromeFormation("abdef", "fecab"));
console.log(checkPalindromeFormation("cddb", "bddc"));