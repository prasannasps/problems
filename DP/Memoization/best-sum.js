const bestSum = (targetSum, nums, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shorterComb = null;

    for (const num of nums) {

        const rem = targetSum - num;
        const result = bestSum(rem, nums, memo);

        if (result) {
            const currComb = [...result, num];
            if (!shorterComb || (shorterComb.length > currComb.length)) {
                shorterComb = currComb;
            }
        }

    }

    memo[targetSum] = shorterComb;
    return shorterComb;

}


console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));