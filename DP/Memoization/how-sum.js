const howSum = (targetSum, nums, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of nums) {

        const rem = targetSum - num;
        memo[targetSum] = howSum(rem, nums, memo);
        // console.log(memo);
        if (memo[targetSum]) {
            return [...memo[targetSum], num];
        }

    }

    memo[targetSum] = null;
    return null;

}


// console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));