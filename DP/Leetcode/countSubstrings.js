/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/**
 * 
 * Comparing s with t one by one
 * Ex : 
 * s = 'ab', t = 'bb'
 * 
 * Below are the comparisons:
 * 
 * First Loop - No of els - 1
 *              Start of s      Start of t
 * a - b        0               0
 * a - b        0               1
 * 
 * 2nd Loop - No of els - 2
 * ab - bb      0               0
 * 
 * 3rd Loop - no of els - 1
 * 
 * b - b        1               0
 * b - b        1               1
 * 
 * 
 * 
 */

var countSubstrings = function (s, t) {

    const slength = s.length;
    const tlength = t.length;
    let count = 0;

    const memo = {};

    for (let i = 0; i < slength; i++) {

        for (let j = i; j < slength; j++) {

            const splitWord = s.slice(i, j + 1);
            const splitWordLen = splitWord.length;

            for (let k = 0; k < tlength && (k + splitWordLen <= tlength); k++) {

                const tSplitWord = t.slice(k, splitWordLen + k);
                if (difference(splitWord, tSplitWord, memo)) {
                    count++;
                }

            }

        }

    }

    return count;

};


/**
 * @param {string} splitWord
 * @param {string} tSplitWord
 * @param {any} memo
 * @return {boolean}
 */
const difference = (splitWord, tSplitWord, memo = {}) => {

    if (memo[splitWord + "::" + tSplitWord]) return memo[splitWord + "::" + tSplitWord];

    const len = splitWord.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (splitWord.charAt(i) !== tSplitWord.charAt(i)) count++;
    }

    count === 1 ? memo[splitWord + "::" + tSplitWord] = true : memo[splitWord + "::" + tSplitWord] = false;
    return memo[splitWord + "::" + tSplitWord];

}


console.log(countSubstrings("aba", "baba"));
console.log(countSubstrings("ab", "bb"));