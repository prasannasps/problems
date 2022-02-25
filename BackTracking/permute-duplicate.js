//https://leetcode.com/problems/permutations-ii/



//My Soln
const permuteDup = (nums) => {
    const list = [];
    nums.sort();
    backtrack(list, [], nums);
    return list;
}


const backtrack = (list, tempList, nums) => {
    if (tempList.length === nums.length) {
        list.push(JSON.parse(JSON.stringify(tempList)));
    } else {

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] || (count(nums, nums[i]) === count(tempList, nums[i]))) continue;
            tempList.push(nums[i]);
            backtrack(list, tempList, nums);
            tempList.splice(tempList.length - 1);

        }

    }
}

const count = (array, el) => {
    return array.filter(x => x === el).length;
}





//Leetcode Soln
//https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)
const permuteDup = (nums) => {
    const list = [];
    nums.sort();
    backtrack(list, [], nums, new Array(nums.length).fill(false));
    return list;
}


const backtrack = (list, tempList, nums, used) => {
    if (tempList.length === nums.length) {
        list.push(JSON.parse(JSON.stringify(tempList)));
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, used);
            used[i] = false;
            tempList.splice(tempList.length - 1);
        }
    }
}


console.log(permuteDup([1, 1, 2]))
console.log(permuteDup([1, 2, 3]))