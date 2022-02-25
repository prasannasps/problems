const canSum = (targetSum, nums, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (const num of nums) {

        const remainder = targetSum - num;
        memo[remainder] = canSum(remainder, nums, memo);
        if (memo[remainder]) return true;

    }

    return false;

}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));