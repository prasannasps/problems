/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/contest/weekly-contest-277/problems/rearrange-array-elements-by-sign/
 */
var rearrangeArray = function (nums) {

    const resultNums = [];
    let len = nums.length;
    const map = {
        pos: [],
        neg: []
    };
    nums.map(num => { num > 0 ? map['pos'].push(num) : map['neg'].push(num) });

    while (len) {
        len % 2 === 0 ? resultNums.push(map['pos'].splice(0, 1)[0]) : resultNums.push(map['neg'].splice(0, 1)[0]);
        len--;
    }

    return resultNums;

};


console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([-1, 1]));

