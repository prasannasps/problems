const Factorial = (num) => {
    if (num <= 2) { return 2; }
    return num * Factorial(num - 1);
}

console.log(Factorial(5));
console.log(Factorial(4));
console.log(Factorial(3));