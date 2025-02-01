let now = new Date();
let date = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
};
let formattedDate = date.year + "-" + (date.month < 10 ? "0" : "") + date.month + "-" + (date.day < 10 ? "0" : "") + date.day;
console.log(formattedDate);