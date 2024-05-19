let celsius = 10;
const fahrenheit = celsius * 9 / 5 + 32;
console.log(fahrenheit);

let dayOfMonth = 31; 
const hourOfMonth = dayOfMonth * 24;
console.log(hourOfMonth);
const minutesOfMonth = hourOfMonth * 60;
console.log(minutesOfMonth);

let health = 100; 
let energy = 100; 
health = health - 50; 
energy = energy - 37;
console.log("Твоє здоров'я:", health, 'Твоя енергія:', energy);

const discount = 10;
const price = 200; 
const sum = price - price / 100 * discount;
console.log(sum);

let number = 23.432342;
number = Math.floor(number);
console.log(number);

let num = '31.453';
num = Number.parseFloat(num);
console.log(num);

let twiceNumber = '9';
twiceNumber = Number.parseInt(twiceNumber);
console.log(twiceNumber);

let sqrtNumber = 4;
sqrtNumber = Math.sqrt(sqrtNumber);
console.log(sqrtNumber);

let lastNum = 5;
let lastString = '7';
lastString = Number.parseInt(lastString);
console.log(lastString);
lastNum = lastNum.toString();
console.log(lastNum);