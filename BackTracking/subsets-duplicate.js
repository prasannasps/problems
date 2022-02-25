/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.com/problems/subsets-ii/
 */
var subsetsWithDup = function (nums) {
    const list = [];
    nums.sort();
    backtrack(list, [], nums, 0);
    return list;
};


const backtrack = (list, templist, nums, start) => {
    list.push(JSON.parse(JSON.stringify(templist)));
    for (let i = start; i < nums.length; i++) {
        // if (templist.includes(nums[i])) continue;
        if (i > start && nums[i] === nums[i - 1]) continue;
        templist.push(nums[i]);
        console.log(list);
        console.log(templist)
        backtrack(list, templist, nums, i + 1);
        templist.splice(templist.length - 1);
    }
}

console.log(subsetsWithDup([1, 2, 2]));