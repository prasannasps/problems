/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {

    let drink = numBottles;

    while (numBottles >= numExchange) {

        let canDrinkBottles = Math.floor(numBottles / numExchange);
        numBottles = canDrinkBottles + numBottles % numExchange;
        drink += canDrinkBottles;

    }
    console.log(drink)
    return drink;

};

numWaterBottles(9, 3);
numWaterBottles(15, 4);