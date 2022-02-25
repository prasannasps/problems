/**
 * @param {number} n
 * @return {boolean}
 * https://leetcode.com/problems/happy-number/
 */
var isHappy = function (n, memo = {}) {

    if (n === 1) return true;
    const num = findSum(n);
    if (memo[num]) return false;
    memo[num] = true;
    return isHappy(num, memo);

};


const findSum = (params) => {

    const str = params.toString();
    let newNum = 0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        newNum += (+element * +element);
    }

    console.log(newNum);
    return newNum;

}


console.log(isHappy(19));
console.log(isHappy(2));





