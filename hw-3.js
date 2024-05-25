const result = 5 + 5 + '5';
console.log(typeof result);
console.log(result);

const email = 'cybulskij2011@ukr.net';
const isEmail = email.includes('@');
console.log(isEmail);
const numberOfSymbols = email.length;
console.log(numberOfSymbols);

const my = 'My';
const nameName = 'name';
const is = 'is';
const gap = ' ';
const myName = 'Victor';
let fullName = my + gap + nameName + gap + is;
fullName = fullName + gap + myName;
console.log(fullName);

const userName = prompt('type your username');
const payment = '801';
alert('Дякуємо,  ' + userName + '! ' + 'До сплати ' + payment + ' гривень!');