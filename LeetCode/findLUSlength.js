/**
 * @param {string[]} strs
 * @return {number}
 * https://leetcode.com/problems/longest-uncommon-subsequence-ii/
 * 
 * 
 * loop strings m*n
 * 
 * check if pair has subsequence.
 * in inner loop if it has only one subseq keep it as currmax, if exceeds 1 keep currmax as -1 and break.
 * in outer loop, check max of topmax and currmax and keep.
 * return topmax.
 * 
 * Alternate for finding subsequence:
 * 
 * sort both strings and check if aone string starts with another string
 * 
 * 
 */
var findLUSlength = function (strs) {

    let topMax = -1;

    for (let i = 0; i < strs.length; i++) {

        let currMax = -1;

        for (let j = 0; j < strs.length; j++) {

            const currentSeqLen = maxunCommonSubSequence(strs[j], strs[i])
            if (currMax > 0 && currentSeqLen > 0) {
                currMax = -1;
                break;
            }
            currMax = Math.max(currMax, currentSeqLen);

        }

        topMax = Math.max(topMax, currMax);

    }

    return topMax;

};


/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
const maxunCommonSubSequence = (str1, str2) => {

    return seq(str1, str2);

}


/**
 * @param {string} largerStr
 * @param {string} smallerStr
 * @return {number}
 */
const seq = (largerStr, smallerStr) => {

    let j = 0;

    for (let i = 0; i < largerStr.length && j < smallerStr.length; i++) {

        if (largerStr.charAt(i) === smallerStr.charAt(j)) {
            j++;
        }

    }

    if (j === smallerStr.length) return smallerStr.length;
    return -1;

}

console.log(findLUSlength(["aba", "cdc", "eae"]));
console.log(findLUSlength(["aaa", "aaa", "aa"]));

console.log(findLUSlength(["aabbcc", "aabbcc", "cb", "abc"]));
console.log(findLUSlength(["aabbcc", "aabbcc", "c", "e", "aabbcd"]));


