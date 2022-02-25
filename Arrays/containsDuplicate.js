/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate/description/
 */
var containsDuplicate = function (nums) {

    const numsMap = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (numsMap[element]) {
            return false;
        }

        numsMap[element] = true;

    }
    return true;

};