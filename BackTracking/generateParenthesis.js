/**
 * @param {number} n
 * @return {string[]}
 * https://leetcode.com/problems/generate-parentheses/
 */
var generateParenthesis = function (n) {

    let str = '';
    for (let i = 0; i < n; i++) {
        str += '(';
    }
    for (let i = 0; i < n; i++) {
        str += ')';
    }
    const list = [];
    backtrack(list, '', str, new Array(str.length).fill(false));
    return list;

};

const backtrack = (list, tempStr, string, used) => {

    if (string.length === tempStr.length) {
        if (!list.includes(tempStr) && validateParanthese(tempStr))
            list.push(JSON.parse(JSON.stringify(tempStr)));
    } else {
        for (let i = 0; i < string.length; i++) {
            if (used[i] || i > 0 && string.charAt(i) === string.charAt(i - 1) && !used[i - 1]) continue;
            tempStr += string.substring(i, i + 1);
            used[i] = true;
            backtrack(list, tempStr, string, used);
            used[i] = false;
            tempStr = tempStr.slice(0, -1);
        }
    }
}

const validateParanthese = (str) => {

    let openBracketCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === '(') {
            openBracketCount++;
        } else if (openBracketCount > 0 && char === ')') {
            openBracketCount--;
        } else {
            return false;
        }
    }
    if (!openBracketCount)
        return true;

}

console.log(generateParenthesis(7));