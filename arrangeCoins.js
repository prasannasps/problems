/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {

    let i = 0;
    while (n) {
        i++;
        temp = i;
        while (temp && n) {
            temp--;
            n--;
        }
    }

    console.log(temp === 0 ? i : i - 1);
    // return (temp === 0 ? i : i - 1);

};


arrangeCoins(5);
arrangeCoins(8);
// arrangeCoins(1681692777);


/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {

    let steps = 0;
    while (num) {
        num % 2 === 0 ? num /= 2 : num -= 1;
        steps++;
    }

    console.log(steps);
    return steps;

};


numberOfSteps(14)
numberOfSteps(8)
numberOfSteps(123)