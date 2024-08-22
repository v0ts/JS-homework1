// Завдання 1
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const users = [
	{
		name: 'Sasha',
		balance: 31,
		numberOfFriend: 5,
		skills: 'music',
		friend: 'Nastya',
	},
	{
		name: 'Nastya',
		balance: 1000,
		numberOfFriend: 2,
		skills: 'riding',
		friend: 'Sasha',
	},
	{
		name: 'Maks',
		balance: 531,
		numberOfFriend: 4,
		skills: 'running',
		friend: 'Masha',
	},
	{
		name: 'Artem',
		balance: 43,
		numberOfFriend: 10,
		skills: 'jumping',
		friend: 'Masha',
	}
]

const sumOfBalance = users.reduce((sum, num) => sum += num.balance, 0)
console.log(sumOfBalance)


// Завдання 2
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const checkFriends = users.filter(user => user.friend === 'Masha').map(user => user.name)
console.log(checkFriends)

// Завдання 3
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const sortUser = [...users].sort((a, b) => a.numberOfFriend - b.numberOfFriend).map(user => user.name)
console.log(sortUser)


// Завдання 4
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const sortUserSkills = [...users].sort((a, b) => a.skills + b.skills).map(user => user.skills)
console.log(sortUserSkills)