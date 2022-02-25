// https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums) {

    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
        max = Math.max(...[sum, max]);

        if (sum < 0) {
            sum = 0;
        }


    }

    console.log(max);


};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);