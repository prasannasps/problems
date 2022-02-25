/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * https://leetcode.com/problems/combination-sum-ii/
 */
var combinationSum2 = function (candidates, target) {

    const list = [];
    candidates.sort();
    // console.log("candidates   ", candidates);
    backtrack(list, [], candidates, target, new Array(candidates.length).fill(false), 0);
    return list;

};

const backtrack = (list, tempList, nums, target, used, start) => {

    const sum = tempList.reduce((a, b) => a + b, 0);
    if (sum === target) {
        list.push(JSON.parse(JSON.stringify(tempList)));
    } else {
        for (let i = start; i < nums.length; i++) {
            if (sum > target) return;
            if (used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            tempList.push(nums[i]);
            console.log("start--i--   ", start + "-" + i)
            console.log("used------   ", used);
            console.log("tempList--   ", tempList);
            console.log("list------   ", list)
            backtrack(list, tempList, nums, target, used, i + 1);
            used[i] = false;
            tempList.splice(tempList.length - 1);

        }
    }

}

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))

console.log(combinationSum2([2, 5, 2, 1, 2], 5))

