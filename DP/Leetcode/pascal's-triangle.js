/**
 * @param {number} numRows
 * @return {number[][]}
 * https://leetcode.com/problems/pascals-triangle/
 */
var generate = function (numRows) {

    const resultArray = [];
    for (let index = 1; index <= numRows; index++) {

        if (index === 1) {
            resultArray.push([1]);
        }
        else if (index === 2) {
            resultArray.push([1, 1]);
        }
        else {
            const newArray = new Array(index).fill(1);
            const prevArray = resultArray[index - 2];
            const prevLen = prevArray.length;
            for (let j = 1; j < prevLen; j++) {
                newArray[j] = prevArray[j] + prevArray[j - 1];
            }
            resultArray.push(newArray);
        }

    }

    return resultArray;

};


console.log(generate(5));
console.log(generate(6));
console.log(generate(8));