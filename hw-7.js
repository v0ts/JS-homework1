//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbers = [1, 2, 3]; 
numbers[1] = 10;
console.log(numbers);


//Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const strings = ['Hello World', 'Hi World', 'Bye World']
strings[3] = 'Why?';
console.log(strings);


// Створити скрипт який поверне суму всіх чисел в масиві.

const number = [23, 54, 12]; 
let total = 0;

for (let i of number) { 
  total += i;
}
console.log(total);


// Створити масив з 5-ти чисел.
// Вивести на екран всі елементи масиву за допомогою циклу for.

const secondNumber = [4, 5, 2, 12, 35];

for (let i = 0; i < secondNumber.length; i++) { 
  console.log(secondNumber[i]);
}


// Створити масив із 5-ти рядків.
// Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const secondStrings = ['Hi', 'Hello', 'Hello World', 'Bye', 'Bye World'];

for (let i of secondStrings) { 
  if (i.length >= 5) { 
    console.log(i);
  } else { 
    continue;
  };
};


// Створити масив з 10-ти чисел.
// Знайти та вивести на екран максимальне значення з масиву.

const thirdNumbers = [1, 2, 20, 4, 5, 6, 7, 8, 9, 10];
let maxNumbers = 0;

for (let i = 0; i < thirdNumbers.length; i++) {
  if (thirdNumbers[i] > maxNumbers) { 
    maxNumbers = thirdNumbers[i];
  } else { 
    continue;
  };
};
console.log(maxNumbers);


// Створити масив з 10-ти чисел.
// Знайти всі парні числа в масиві та вивести їх на екран.

const fourthNumbers = [1, 2, 30, 40, 5, 6, 76, 81, 90, 10];

for (let i of fourthNumbers) { 
  if (i % 2 === 0) { 
    console.log(i);
  }
}