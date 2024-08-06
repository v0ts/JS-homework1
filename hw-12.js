const user = {
  hobby: "reading",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}

const { hobby, premium, mood } = user;

// Напиши функцію countProps(obj),
//  яка рахує кількість властивостей в об'єкті.
//  Функція повертає число — кількість властивостей.

const countProps = (obj) => {
  const objArray = Object.keys(obj);
  return objArray.length;
};

console.log(countProps(user));

// Напиши функцію findBestEmployee(employees),
//  яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
// (який виконав більше всіх задач).
//  Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта в форматі "ім'я":"кількість задач".

const employees = {
  nastya: 3,
  sasha: 5,
  artem: 11,
  ruslan: 10,
};

const { nastya, sasha, artem, ruslan } = employees;

const findBestEmployee = (employees) => {
  const arrayEmployees = Object.entries(employees);
  let result = arrayEmployees[0][1];
  for (let i = 1; i < arrayEmployees.length; i++) {
    if (result < arrayEmployees[i][1]) {
      result = arrayEmployees[i][1];
    } else {
      continue;
    }
  }
  return result;
};

console.log(findBestEmployee(employees));

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
//  Функція рахує загальну суму зарплати працівників і повертає її.
//  Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата"

const employeesSalary = {
  nastya: 300,
  sasha: 530,
  artem: 110,
  ruslan: 1000,
};

const {
  nastya: nastyaSalary,
  sasha: sashaSalary,
  artem: artemSalary,
  ruslan: ruslanSalary,
} = employeesSalary;

const countTotalSalary = (employees) => {
  const arrayTotalSalary = Object.values(employees);
  let result = 0;
  for (let i of arrayTotalSalary) {
    result += i;
  }
  return result;
};
console.log(countTotalSalary(employeesSalary));

// Напиши функцію getAllPropValues(arr, prop),
//  яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const arrayObj = [
  {
    name: "nastya",
    age: 15,
  },
  {
    name: "sasha",
    age: 15,
  },
  {
    name: "artem",
    age: 15,
  },
];

const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
  { name: thirdName, age = thirdAge },
] = arrayObj;

const getAllPropValues = (arr, prop) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let array = [];
    const values = Object.entries(arr[i]);
    for (let i = 0; i < values.length; i++) {
      if (values[i][0] === prop) {
        result.push(values[i][1]);
      }
    }
  }
  return result;
};

console.log(getAllPropValues(arrayObj, "name"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName),
//  яка отримує масив об'єктів та ім'я продукту (значення властивості name).
//  Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const allProducts = [
  {
    name: "apple",
    price: 50,
    number: 3,
  },
  {
    name: "cucumber",
    price: 34,
    number: 1,
  },
  {
    name: "pear",
    price: 54,
    number: 2,
  },
];

const [
  {
    name: firstProductName,
    price: firstProductPrice,
    number: firstProductNumber,
  },
  {
    name: secondProductName,
    price: secondProductPrice,
    number: secondProductNumber,
  },
  {
    name: thirdProductName,
    price: thirdProductPrice,
    number: thirdProductNumber,
  },
] = allProducts;

const calculateTotalPrice = (allProdcuts, productName) => {
  let result = 0;
  for (let i = 0; i < allProdcuts.length; i++) {
    const values = Object.values(allProdcuts[i]);
    if (values[0] === productName) {
      result = values[1] * values[2];
    }
  }
  return result;
};

console.log(calculateTotalPrice(allProducts, "pear"));

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const account = {
  balance: 3366,
  checkBalance() {
    return this.balance;
  },
  withdraw(number) {
    if (number > this.balance) {
      return "Не вичтачає грошей на рахунку";
    } else {
      this.balance -= number;
      return `ваш баланс ${this.balance}`;
    }
  },
  replenish(number) {
    this.balance += number;
    return `ваш баланс ${this.balance}`;
  },
};

const {balance} = account;
