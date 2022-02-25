/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/n-th-tribonacci-number/submissions/
 */
const tribonacci = (n, memo = {}) => {

    if (n in memo) return memo[n];
    if (n < 2) return n;
    if (n === 2) return 1;
    memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
    return memo[n];

};