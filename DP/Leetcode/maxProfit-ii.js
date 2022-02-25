/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
var maxProfit = function (prices) {

    let res = curr = Infinity;
    let total = 0;

    prices.map(price => {
        if ((res > curr - price) && (curr - price < 0)) {
            res = curr - price;
            total += res;
            console.log(price + ',' + res + ',' + curr);
            res = Infinity;
        }
        curr = Math.min(curr, price);
    })

    return total < 0 ? total * -1 : 0;

};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// console.log(maxProfit([7, 6, 4, 3, 1]));

console.log(maxProfit([1, 2, 3, 0, 2]));

