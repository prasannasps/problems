const Fibonacci = (num) => {
    if (num < 2) { return num; }
    return Fibonacci(num - 1) + Fibonacci(num - 2);
}

console.log(Fibonacci(5));
console.log(Fibonacci(13));