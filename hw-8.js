// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.
//  Елементів може бути довільна кількість.
//  Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']; 
let string = '';

// for (let i of friends) {
//   string = string + i + ', ';
// }
// console.log(string);

string = friends.join(', ');
console.log(string);


// 2. Працюємо з колекцією карток в trello.
//  Метод splice() (можна використати інші методи)

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
const cardToRemove = 'Карточка-3';
const indexCardToRemove = cards.indexOf(cardToRemove);

cards.splice(indexCardToRemove, 1);
console.log(cards);


const cardToInsert = 'Карточка-6';
const indexCardsToInsert = cards.length;

cards.splice(indexCardsToInsert, 1, cardToInsert);
console.log(cards);

const cardToUpdate = 'Карточка-4';
const indexCardToUpdate = cards.indexOf(cardToUpdate);

cards.splice(indexCardToUpdate, 1, 'Карточка-3');
console.log(cards);