function factorial(n) {
    if (n < 0) {
        return "Факториал не определен для отрицательных чисел.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
let number = 5;
let fact = factorial(number);
 console.log("Факториал числа " + number + " равен: " + fact);