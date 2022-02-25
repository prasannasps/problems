
// https://www.codechef.com/problems/COINS

const byteland = (n) => {
    return land(n);
}


const land = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 0) return 0;
    if (n === 1) return 1;

    memo[n] = Math.max(n, (land(Math.floor(n / 2), memo) + land(Math.floor(n / 3), memo) + land(Math.floor(n / 4), memo)));
    return memo[n];
}


console.log(byteland(12));
console.log(byteland(2));
console.log(byteland(243));