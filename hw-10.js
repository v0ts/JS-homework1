// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран
//  повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const click = confirm('Натисніть на Ок');
const helloWorld = () => { 
  return 'Hello World!';
}

if (click === true) { 
  console.log(helloWorld());
}


// 2. Створи програму, яка генерує випадкове число від 1 до 100.
//  Користувач повинен вгадати число, введенням його в текстове поле.
//  При кліку на кнопку "Перевірити" програма повинна повідомити користувача,
//  чи є їх відповідь правильною.

  const randomNumber = Math.round(Math.random() * (100 - 1) + 1);
  console.log(randomNumber);
  const userNumber = Number(prompt('Вгадайте число від 1 до 100'))

  if (randomNumber === userNumber) { 
    alert('Вітаю ви вгадали число');
  } else { 
    alert('Нажаль ви не вгадали число');
  }


// 3. Створи програму, яка відображає повідомлення про те,
//  скільки разів користувач клікнув на сторінці.

let firstResult = 0;
for (let i = true; i === true;) {
  const clickNumber = confirm('Натисніть на Ок пару раз а потім на Відміна');
  if (clickNumber === true) { 
    firstResult += 1;
  } else { 
    break;
  }
}
console.log(firstResult);


// 4. Напиши функцію, яка приймає масив чисел і колбек-функцію.
//  Функція повинна застосовувати колбек-функцію до кожного елементу масиву
//  та повертати новий масив, що містить результати застосування
//  колбек-функції до кожного елементу.

const array = [1, 2, 3, 4, 5, 6, 7]; 
const doubleNummber = (number) => number * 2;

const applyCallbackToElement = (arr, callback) => { 
  let result = [];
  for (let i of arr) { 
    result.push(callback(i));
  }
  return result;
}
const result = applyCallbackToElement(array, doubleNummber);
console.log(result);


// 5. Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з
//  урахуванням знижки.
//  Функція повинна приймати вартість товару та відсоток знижки як аргументи.
//  Використайте стрілкову функцію та колбек.

const calculatePrice = (price, discount, callback) => { 
  const result = price / discount;
  return callback(result);
}

const showPrice = (showThis) => {
  return showThis;
}

console.log(calculatePrice(111, 10, showPrice));