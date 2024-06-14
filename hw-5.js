const drink = prompt('Виберіть що будете пити "Кава", "Чай" та "Сік"');

switch (drink){
  case "Кава":
    alert("Ви вибрали Каву");
    break;

  case "Чай":
    alert("Ви вибрали Чай");
    break;

  case "Сік":
    alert("Ви вбрали Сік");
    break;

  default:
    alert('Виберіть щось зі списку');
}


const day = prompt('Введіть день тижня');

switch (day){
  case 'Понеділок':
    alert('Сьогодні робочий день');
  break;

  case 'Вівторок':
    alert('Сьогодні робочий день');
  break;

  case 'Середа':
    alert('Сьогодні робочий день');
  break;

  case 'Четверг':
    alert('Сьогодні робочий день');
  break;

  case "П'ятниця":
    alert('Сьогодні робочий день');
  break;

  case 'Субота':
    alert('Сьогодні вихідний');
  break;

  case 'Неділя':
    alert('Сьогодні вихідний');
  break;

  default: 
    alert('Введіть день тижня!');
}


const monthNumber = Number(prompt('Введіть місяць в числовому виді'));

switch (monthNumber){ 
  case 1: 
    alert('Місяць входить до Зими. Місяць містить 31 день');
  break;

  case 2: 
    alert('Місяць входить до Зими. Місяць містить 28 днів');
  break;

  case 3: 
    alert('Місяць входить до Весни. Місяць містить 31 день');
  break;

  case 4: 
    alert('Місяць входить до Весни. Місяць містить 30 днів');
  break;

  case 5: 
    alert('Місяць входить до Весни. Місяць містить 31 день');
  break;

  case 6: 
    alert('Місяць входить до Літа. Місяць містить 30 днів');
  break;

  case 7: 
    alert('Місяць входить до Літа. Місяць містить 31 день');
  break;

  case 8: 
    alert('Місяць входить до Літа. Місяць містить 31 день');
  break;

  case 9: 
    alert('Місяць входить до Осені. Місяць містить 30 днів');
  break;

  case 10: 
    alert('Місяць входить до Осені. Місяць містить 31 день');
  break;

  case 11: 
    alert('Місяць входить до Осені. Місяць містить 30 днів');
  break;

  case 12: 
    alert('Місяць входить до Зими. Місяць містить 31 день');
  break;

  default: 
    alert('Ведіть місяць в числовому виді!');
}


const color = prompt('Введіть колір із перелічиних: "червоний", "зелений", "жовтий"');

switch (color){
  case 'червоний':
    alert('червоний Означає - Стій!');
  break;
  
  case 'зелений':
    alert('зелений Означає - Йди!');
  break;

  case 'жовтий':
    alert('жовтий Означає - Приготуйся!');
  break;
  
  default: 
    alert('Введіть колір із переліку!');
}


const firstNumber = Number(prompt('Введіть перше число'));
const secondNumber = Number(prompt('Введіть друге число'));
const action = prompt("Введіть дію +, -, *, /. Пам'ятайте на 0 ділити неможно");
let result = '';

switch (action){
  case '+':
    result = firstNumber + secondNumber;
    alert('Ваш результат = ' + result); 
  break; 

  case '-': 
    result = firstNumber - secondNumber;
    alert('Ваш результат = ' + result);
  break;

  case '*': 
    result = firstNumber * secondNumber;
    alert('Ваш результат = ' + result);
  break; 

  case '/': 
    result = firstNumber / secondNumber;
    alert('Ваш результат = ' + result);
  break;

  default: 
    alert('Ви ввели данні неправильно!');
}