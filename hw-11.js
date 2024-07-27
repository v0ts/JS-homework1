// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber",
// "balance". Додайте до об'єкту метод "deposit",
//  який дозволяє додавати гроші на рахунок, та метод "withdraw",
//  який дозволяє знімати гроші з рахунку.
//  Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок”
//  та отримати ‘готівку’ відповідно.
//  Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = { 
  ownerName: 'Vacil',
  accountNumber: 1,
  balance: 1453,
  deoposit (numberOfDeposit) { 
    this.balance = this.balance + numberOfDeposit;
    return `На балансі залишилось ${this.balance}`;
  },
  withdraw (numberOfWithdraw) { 
    this.balance = this.balance - numberOfWithdraw;
    return `На балансі залишилось ${this.balance}`;
  }
};

const deposit = Number(prompt('На скільки хочете поповнити баланс'));
const withdrawNumber = Number(prompt('Скільки хочете зняти з балансу?'));

if (deposit > 0) { 
  bankAccount.deoposit(deposit);
} else { 
  alert('Ви не поповнили баланс')
}

if (withdrawNumber > 0) { 
  bankAccount.withdraw(withdrawNumber);
} else { 
  alert('Ви не зняли баланс')
}

console.log(bankAccount);
console.log(bankAccount);


// Створіть об'єкт "weather" з властивостями "temperature", "humidity",
//  "windSpeed". Додайте до об'єкту метод, який повертає "true",
//  якщо температура нижче 0 градусів Цельсія, та "false",
//  якщо температура вище або рівна 0 градусів Цельсія.
//  Температуру потрібно отримати з інпуту на сторінці.
//  Якщо метод повернув "true" вивести повідомлення 
// “температура нижче 0 градусів Цельсія” і навпаки

let result;
const weather = { 
  temperature: 3,
  humidity: 3,
  windSpeed: 5,
  checkTemperature () { 
    if (this.temperature < 0) { 
      result = false;
    } else { 
      result = true;
    }
    return result;
  }
}

const setTemperature = Number(prompt('Яка у вас температура?'));
weather.temperature = setTemperature;
if (weather.checkTemperature() === false) { 
  alert('Температура нижче 0');
} else { 
  alert('Температура вище 0');
};


// Створіть об’єкт "user", якbq буде мати властивості "name", "email",
//  "password". Додайте метод "login",
//  який буде перевіряти правильність введеного email та password.
//  Використайте інпути для запису значень властивостей в об’єкт

const user = { 
  name: 'monster',
  email: 'asadas@gmail.com',
  password: '12344321',
  login (checkEmail, checkPassword) { 
    let result = '';
    if (checkEmail === this.email && checkPassword === this.password) { 
      result = 'Ви ввели данні правильно!';
    } else { 
      result = 'Ви ввели данні не правильно!';
    }
    return result;
  }
}

const userPasswordAndEmail = prompt('Введіть ваш email та password через пробіл');
const arrayOfUser = userPasswordAndEmail.split(' ');
console.log(arrayOfUser);
console.log(user.login(arrayOfUser[0], arrayOfUser[1]))


// Створіть об'єкт "movie" з властивостями "title", "director", "year",
//  "rating". Додайте до об'єкту метод, який повертає "true",
//  якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче.
//  Вивести значення властивостей на сторінку.
//  Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = { 
  title: '12 Hour Of Dead',
  director: 'Vasil Vasilivitch',
  year: 2024,
  rating: 8,
  checkRating () { 
    let result; 
    if (this.rating > 8) { 
      result = true; 
    } else { 
      result = false;
    }
    return result;
  }
}

if (movie.checkRating() === true) { 
  alert('Оцінка фільму більше 8!');
} else { 
  alert('Оцінка фільму менше або дорівнює 8!');
}