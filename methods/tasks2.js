let numbers = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;
for (let i = 0; i < numbers.length; i++) {
  sumOfCubes += Math.pow(numbers[i], 3);
}
let sqrtOfSum = Math.sqrt(sumOfCubes);
console.log("Квадратный корень из суммы кубов:", sqrtOfSum);