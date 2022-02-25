/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/next-greater-element-ii/submissions/
 */
var nextGreaterElements = function (nums) {

    nums = [...nums, ...nums];
    const resArr = [];

    for (let i = 0; i < nums.length / 2; i++) {

        let included = false;
        for (let j = i + 1; j < nums.length / 2 + j && j < nums.length; j++) {

            if (nums[j] > nums[i]) {
                resArr.push(nums[j]);
                included = true;
                break;
            }

        }
        if (!included) resArr.push(-1);

    }

    return resArr;

};


console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 2, 3, 4, 3]));