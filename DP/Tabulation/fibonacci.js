const fib = (num) => {

    const dp = Array(num + 1).fill(0);
    dp[1] = 1;

    for (let i = 0; i <= num; i++) {

        dp[i + 1] += dp[i];
        dp[i + 2] += dp[i];

    }

    return dp[num];

}

console.log(fib(6));
console.log(fib(7));

console.log(fib(8));
console.log(fib(50));