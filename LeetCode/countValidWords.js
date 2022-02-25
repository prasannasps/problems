/**
 * @param {string} sentence
 * @return {number}
 * https://leetcode.com/problems/number-of-valid-words-in-a-sentence/submissions/
 */
var countValidWords = function (sentence) {

    const wordlist = sentence.split(" ");
    let count = 0;

    wordlist.forEach(word => {
        if (word.length > 0 && conditions(word)) count++;
    })
    return count;

};


/**
 * @param {string} word
 * @return {boolean}
 */
const conditions = (word) => {

    let hyphenCount = 0;
    let punctCount = 0;

    for (let i = 0; i < word.length; i++) {
        const element = word.charAt(i);

        if (['!', '.', ','].includes(element)) punctCount++;
        if (element === '-') hyphenCount++;

        if (+element >= 0 && +element <= 9) return false;
        if (element === '-' && (i === 0 || i === word.length - 1)) return false;
        if (element === '-' && (!word.charAt(i - 1).match(/[a-z]/i) || !word.charAt(i + 1).match(/[a-z]/i))) return false;
        if (['!', '.', ','].includes(element) && i < word.length - 1) return false;
    }

    if (hyphenCount > 1 || punctCount > 1) return false;
    return true;

}

console.log(countValidWords("cat and  dog"));
console.log(countValidWords("!this  1-s b8d!"));

console.log(countValidWords(",aab"));
