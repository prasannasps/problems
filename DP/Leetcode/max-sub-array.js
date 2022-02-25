/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-subarray/submissions/
 */
var maxSubArray = function (nums) {

    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum += element;
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }

    return max;

};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));