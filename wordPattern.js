/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

//  Runtime: 64 ms, faster than 95.68% of JavaScript online submissions for Word Pattern.
//  Memory Usage: 38.8 MB, less than 28.89% of JavaScript online submissions for Word Pattern.

var wordPattern = function (pattern, s) {

    if (findString(pattern) === findString(s.split(" "))) {
        return true;
    }

    return false;

};


const findString = (inputStr) => {

    let str = "";
    const map = {};

    const len = inputStr.length;

    let contNumber = 1;
    for (let index = 0; index < len; index++) {
        const element = inputStr[index];
        if (map[element]) {
            str += map[element];
        }
        else {
            str += contNumber;
            map[element] = contNumber++;
        }
    }

    return str;

}
