/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function (prices) {

    let res = curr = Infinity;

    prices.map(price => {
        res = Math.min(res, curr - price);
        curr = Math.min(curr, price);
    })

    return res < 0 ? res * -1 : 0;

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([7, 6, 4, 3, 1]));

console.log(maxProfit([5, 7, 1, 6]));

