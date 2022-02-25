/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
var maxProfit = function (prices) {

    let res = curr = Infinity;
    let total = 0;
    let prevIndex = 0;

    prices.map((price, i) => {
        if ((res > curr - price) && (curr - price < 0)) {
            res = curr - price;
            // if (i - 2 === prevIndex) {
            //     total = Math.min(total, res);
            // } else {
            //     total += res;
            // }
            // total += res;
            total = Math.min(total, total - curr);
            res = curr = Infinity;
            prevIndex = i;
        }
        curr = Math.min(curr, price);
    })

    return total < 0 ? total * -1 : 0;

};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([1, 2, 3, 0, 2]));

console.log(maxProfit([5, 7, 1, 6]));

