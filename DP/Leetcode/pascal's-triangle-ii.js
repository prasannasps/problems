/**
 * @param {number} rowIndex
 * @return {number[]}
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
var getRow = function (rowIndex) {

    const result = new Array(rowIndex + 1).fill(0);
    result[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {

        for (let k = i; k > 0; k--) {
            result[k] = result[k] + result[k - 1];
        }

    }

    return result;


};


console.log(getRow(3));
console.log(getRow(5));
console.log(getRow(6));
console.log(getRow(8));