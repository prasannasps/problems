//https://leetcode.com/problems/permutations/

const subsets = (nums) => {
    const list = [];
    backtrack(list, [], nums);
    return list;
}


const backtrack = (list, tempList, nums) => {
    if (tempList.length === nums.length) {
        list.push(JSON.parse(JSON.stringify(tempList)));
    } else {
        for (let num of nums) {
            if (tempList.includes(num)) continue;
            tempList.push(num);
            console.log(list);
            console.log(tempList)
            backtrack(list, tempList, nums);
            tempList.splice(tempList.length - 1);
        }
    }
}


console.log(subsets([1, 2, 3]))