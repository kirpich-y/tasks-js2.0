let numsArray = [2, 4, 6, 8, 10];
let sumElements = 0;
for (let i = 0; i < numsArray.length; i++) {
  sumElements += numsArray[i];
}
let average = sumElements / numsArray.length;
console.log("Среднее арифметическое:", average);