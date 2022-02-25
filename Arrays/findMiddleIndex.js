/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/find-the-middle-index-in-array/submissions/
 */
var findMiddleIndex = function (nums) {

    const rightSums = [0];
    const len = nums.length;

    let sum = 0;
    // rightSums.push(sum);

    for (let index = len - 2; index >= 0; index--) {
        sum += nums[index + 1];
        rightSums.push(sum);
    }
    console.log(rightSums);

    sum = 0;
    for (let index = 1; index <= nums.length; index++) {
        // console.log(sum)
        const ind = len - index;
        if (sum === rightSums[ind]) {
            console.log(index - 1);
            return index - 1;
        }
        const element = nums[index - 1];
        sum += element;
    }

    console.log(-1);
    return -1;

};

findMiddleIndex([2, 3, -1, 8, 4]);
findMiddleIndex([1, -1, 4]);
findMiddleIndex([2, 5]);
findMiddleIndex([1]);
findMiddleIndex([0, 0, 0, 0]);
