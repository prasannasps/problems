/**
 * @param {number[]} cost
 * @return {number}
 * https://leetcode.com/problems/climbing-stairs/
 */
var minCostClimbingStairs = function (cost) {

    const len = cost.length;
    return Math.min(minCost(cost, len - 1), minCost(cost, len - 2));

};


const minCost = (cost, n, memo = {}) => {

    if (n in memo) return memo[n];
    if (n < 0) return 0;
    memo[n] = cost[n] + Math.min(minCost(cost, n - 1, memo), minCost(cost, n - 2, memo));
    return memo[n];

}

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));