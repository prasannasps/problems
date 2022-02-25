/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.com/problems/rotate-array/description/
 */
var rotate = function (nums, k) {

    const copyNums = JSON.parse(JSON.stringify(nums));
    const len = nums.length;
    k = k % len;
    let contInd = 0;

    if (k === 0) {
        console.log(nums);
        return nums;
    }

    for (let index = len - k; index < copyNums.length; index++) {
        const element = copyNums[index];
        nums[contInd] = element;
        contInd++;
    }

    for (let index = 0; index < len - k; index++) {
        const element = copyNums[index];
        nums[contInd] = element;
        contInd++;
    }

    console.log(nums);
    return nums;

};

rotate([1, 2, 3, 4, 5, 6, 7], 4);

//Leet code soln


// public void rotate(int[] nums, int k) {
//     k %= nums.length;
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
// }

// public void reverse(int[] nums, int start, int end) {
//     while (start < end) {
//         int temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
// }