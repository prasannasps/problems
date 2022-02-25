const Fibonacci = (num) => {

    let a = 0;
    let b = 1;
    let sum = 1;

    while (num-- >= 2) {
        a = b;
        b = sum;
        sum += a;
        console.log(sum)
    }

    return sum;

}

// console.log(Fibonacci(6));
console.log(Fibonacci(13));