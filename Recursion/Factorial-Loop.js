const Factorial = (num) => {
    let fact = 1;
    while (num > 1) {
        fact *= num--;
    }
    return fact;
}

console.log(Factorial(5));
console.log(Factorial(4));
console.log(Factorial(3));