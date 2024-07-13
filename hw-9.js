// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
//  який для кожного елемента масиву буде виводити в консоль повідомлення
//  в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
//  з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const fruits = ['Mango', 'Poly', 'Ajax'];

function logItems(array) {
  for (let i = 0; i < array.length; i ++) { 
    console.log(`${i + 1} - ${array[i]}`)
  }
  return array;
}

console.log(logItems(fruits));


// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас.
//  Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок (в рядку будуть тільки слова і прогалини)
//  і ціну гравіювання одного слова,
//  і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) { 
  const words = message.split(' ');
  let result = 0;
  for (let i of words) { 
    result += pricePerWord;
  }
  return result;
}

console.log(calculateEngravingPrice('hello world', 6))


// Завдання 3
// Напиши функцію findLongestWord(string),
//  яка приймає параметром довільний рядок
//  (в рядку будуть тільки слова і прогалини) і повертає найдовше слово
//  в цьому рядку.

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWords = words[0];
  for (let i = 0; i < words.length; i ++) { 
    if (longestWords.length >= words[i].length) { 
      longestWords = longestWords;
    } else {
      longestWords = words[i];
    }
  }
  return longestWords;
}

console.log(findLongestWord('Okaaaaay lets goo'));


// Завдання 4
// Напиши функці1ю formatString(string) яка приймає рядок і
//  форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів,
//  функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів,
//  то функція обрізає рядок до 40-ка символів і
//  додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) { 
  const stringLetters = string.split('');
  let result = '';
  if (stringLetters.length > 40) { 
    stringLetters.slice(0, 40);
    stringLetters.push('...');
    result = stringLetters.join('');
  }

  return result;
};

console.log(formatString('фівфіврифірвифіорливорфіиврофіиврофіивроифорвіщифілорвиіфлоирвфі'));

// Завдання 5
// Напиши функцію checkForSpam(message),
//  приймаючу 1 параметр message — рядок.
//  Функція перевіряє її на вміст слів spam і sale.
//  Якщо знайшли заборонене слово,
//то функція повертає true, якщо заборонених слів немає функція повертає false.
//  Слова в рядку можуть бути в довільному регістрі.

const dangerSpam = 'spam';
const dangerSale = 'sale';

function checkForSpam (message) { 
  const checkWord = message.toLowerCase().split(' '); 
  const firstIsDangerWords = checkWord.includes('spam');
  const secondIsDangerWords = checkWord.includes('sale');
  let dangerWords;

  if (firstIsDangerWords === true || secondIsDangerWords === true) {
    dangerWords = true;
  } else { 
    dangerWords = false;
  };

  return dangerWords;
}

console.log(checkForSpam('spam and sale is Danger words'));


// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
//  Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих
//  пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel,
//  якщо масив не порожній,
//  необхідно порахувати суму всіх елементів масиву і
//  записати її в змінну total.
//  Використовуй цикл for або for...of.
//  Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// const numbers = [];
// let total = 0;
// for (let i = true; i === true;) {
//   const input = prompt('Введіть число');
//   if (input === null) {
//     for (i of numbers) { 
//       total = total + Number(i);
//     }
//     console.log(total);
//     break;
//   } else { 
//     numbers.push(input);
//   };
// }
