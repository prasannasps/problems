/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

const findUnsortedSubarray = (nums) => {
    const clonedNums = JSON.parse(JSON.stringify(nums));

    let beg, endd;

    clonedNums.sort((a, b) => a - b);

    let start = -1;
    while (start++ < nums.length) {
        if (nums[start] !== clonedNums[start]) {
            beg = start;
            break;
        }
    }

    let end = nums.length;

    while (end-- > 0) {
        if (nums[end] !== clonedNums[end]) {
            endd = end;
            break;
        }
    }

    console.log((endd >= 0 && beg >= 0) ? endd - beg + 1 : 0);
    return ((endd >= 0 && beg >= 0) ? endd - beg + 1 : 0);
}


findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
findUnsortedSubarray([2, 1]);
findUnsortedSubarray([1, 3, 2, 4, 5]);
findUnsortedSubarray([1, 2, 3, 4, 5]);