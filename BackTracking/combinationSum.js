/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * https://leetcode.com/problems/combination-sum/submissions/
 */
var combinationSum = function (candidates, target) {

    const list = [];
    candidates.sort();
    backtrack(list, [], candidates, target, 0);
    return list;

};

const backtrack = (list, tempList, nums, target, start) => {

    const sum = tempList.reduce((a, b) => a + b, 0);
    if (sum === target) {
        list.push(JSON.parse(JSON.stringify(tempList)));
    } else {
        for (let i = start; i < nums.length; i++) {
            if (sum > target) return;
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, target, i);
            tempList.splice(tempList.length - 1);

        }
    }

}

console.log(combinationSum([2, 3, 5], 8))

console.log(combinationSum([2], 1))
