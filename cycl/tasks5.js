let arr = [1, 3, 6, 8, 5, 9];
let hasFive = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    hasFive = true;
    break;
  }
}
if (hasFive) {
  console.log("В массиве есть элемент со значением 5");
} else {
  console.log("В массиве нет элемента со значением 5");
}