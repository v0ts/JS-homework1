// const message = prompt('будь ласка напишіть щось!');

// if (message === ''){ 
//   alert('Ви нічого не написали!');
// } else {
//   alert('Ви написала щось!');
// };


// let numberOne = prompt('Введіть перше число!');
// let numberTwo = prompt('Введіть друге число!');

// numberOne = Number(numberOne);
// numberTwo = Number(numberTwo);

// const sumNumbers = numberOne + numberTwo;

// if (sumNumbers > 10){
//   alert('Сума більша за 10');
// } else { 
//   alert('Сума менша або дорівнює 10');
// };


// const javaScript = 'JavaScript'.toLocaleLowerCase();
// const text = prompt('Як називається мова програмування на якій пишуться сайти?').toLocaleLowerCase();

// if (text === javaScript){ 
//   alert('Правильно!');
// } else { 
//   alert('Не правильно! :(');
// };


// const lastNumber = prompt('Введіть число!');

// if (lastNumber >= 10 && lastNumber <= 20){ 
//   alert('Число входить в діапазон від 10 до 20');
// } else { 
//   alert('Число не входить в діапазон від 10 до 20');
// }


const userName = 'VoTs';
const email = 'email@gmail.com';
const password = '123456';

const userNameLength = userName.length;
const emailFirstCondition = email.indexOf('@');
const emailSecondCondition = email.indexOf('.');
const passwordLength = password.length;

let firstCondition = '';
let secondCondition = '';
let thirdCondition = '';

if (userNameLength >= 3){ 
  firstCondition = true;
} else {
  firstCondition = false;
};

if (emailFirstCondition >= 1 && emailSecondCondition >= 1) { 
  secondCondition = true; 
} else { 
  secondCondition = false; 
};

if (passwordLength >= 6){
  thirdCondition = true; 
} else { 
  thirdCondition = false;
};

if  (firstCondition === true && secondCondition === true && thirdCondition === true){
  alert('Через секунду вас перенаправить на іншу сторінку!');
} else { 
  alert('Данні заповнені неправильно');
}