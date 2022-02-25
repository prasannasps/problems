/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/house-robber-ii/
 */
var rob = function (nums) {

    const len = nums.length;
    if (len === 1) return nums[0];
    // return robverse(nums.slice(1), len - 2)
    const memo = {};
    const a = Math.max(robverse(nums.slice(1), len - 2), robverse(nums.slice(0, len - 1), len - 2));
    console.log(memo);
    return a;

};


const robverse = (nums, n, memo = {}) => {

    if (n in memo) return memo[n];
    if (n < 0) return 0;
    memo[n] = Math.max(nums[n] + robverse(nums, n - 2, memo), robverse(nums, n - 1, memo));
    return memo[n];

}


console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));
console.log(rob([1]))