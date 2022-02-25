// https://leetcode.com/problems/subsets/

const subsets = (nums) => {
    const list = [];
    nums.sort();
    backtrack(list, [], nums, 0);
    return list;
}


const backtrack = (list, tempList, nums, start) => {
    list.push(JSON.parse(JSON.stringify(tempList)));

    for (let i = start; i < nums.length; i++) {
        if (tempList.includes(nums[i])) continue;
        tempList.push(nums[i]);
        console.log(list);
        console.log(tempList)
        backtrack(list, tempList, nums, i + 1);
        tempList.splice(tempList.length - 1);
    }
}


console.log(subsets([1, 2, 3]))