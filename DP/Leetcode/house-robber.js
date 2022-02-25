/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/house-robber/
 */
var rob = function (nums) {

    const len = nums.length;
    // return robverse(Math.min(robverse(nums, len - 1), robverse(nums, len - 2)))
    return robverse(nums, len - 1)

};


const robverse = (nums, n, memo = {}) => {

    if (n in memo) return memo[n];
    if (n < 0) return 0;
    memo[n] = Math.max(robverse(nums, n - 2, memo) + nums[n], robverse(nums, n - 1, memo));
    return memo[n];

}


console.log(rob([114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240]));