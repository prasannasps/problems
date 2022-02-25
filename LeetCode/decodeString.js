/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/decode-string/submissions/
 */

var decodeString = function (s) {

    let { openIndex, closeIndex } = findIndex(s);

    while (openIndex > 0 && closeIndex > 0) {

        let str = s.slice(openIndex + 1, closeIndex);
        let num = findNum(s, openIndex);
        let newStr = '';

        for (let i = 0; i < num; i++) {
            newStr += str;
        }

        s = s.substring(0, openIndex - num.toString().length) + newStr + s.substring(closeIndex + 1);
        const obj = findIndex(s);
        openIndex = obj.openIndex;
        closeIndex = obj.closeIndex;

    }

    return s;

};

const findIndex = (s) => {

    let openIndex = -1, closeIndex = -1;
    for (let i = 0; i < s.length; i++) {
        const element = s.charAt(i);
        if (element === '[') {
            openIndex = i;
        } else if (element === ']') {
            closeIndex = i;
        }

        if (openIndex > 0 && closeIndex > 0) return { openIndex, closeIndex };

    }

    return { openIndex, closeIndex };

}

const findNum = (s, openInd) => {

    let numStr = '';
    for (let index = openInd - 1; index >= 0 && +s.charAt(index) >= 0; index--) {
        numStr = s.charAt(index) + numStr;
    }

    return +numStr;

}

console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString("100[leetcode]"));
console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));
