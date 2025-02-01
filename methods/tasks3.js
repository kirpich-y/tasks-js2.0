let number = 379;
let sqrt = Math.sqrt(number);
let roundedToInt = Math.round(sqrt);
let roundedToTenth = Math.round(sqrt * 10) / 10;
let roundedToHundredth = Math.round(sqrt * 100) / 100;
console.log("Округление до целого:", roundedToInt);
console.log("Округление до десятых:", roundedToTenth);
console.log("Округление до сотых:", roundedToHundredth);