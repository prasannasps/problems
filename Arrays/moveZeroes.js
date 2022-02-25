/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.com/problems/move-zeroes/description/
 */
var moveZeroes = function (nums) {


    let swapA = 0;
    let swapB = 1;


    while (swapB < nums.length) {
        if (nums[swapA] === 0 && nums[swapB] !== 0) {
            let temp = nums[swapA];
            nums[swapA] = nums[swapB];
            nums[swapB] = temp;
        }
        else if (nums[swapA] === 0 && nums[swapB] === 0) {
            swapB++;
            continue;
        }
        // else {
        //     let temp = nums[swapA];
        //     nums[swapA] = nums[swapB];
        //     nums[swapB] = temp;
        // }
        swapA++;
        swapB++;
    }

    // console.log(nums);

};

moveZeroes([0, 1, -3, 0, 0, 98, 43, 0, -98])