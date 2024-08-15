const users = [
	{
		name: 'nastya',
		eyeColor: 'blue',
		gender: 'female',
		isActive: true,
		email: '123@gmail.com',
		age: 15,
	},
	{
		name: 'artem',
		eyeColor: 'gray',
		gender: 'male',
		isActive: false,
		email: '121233@gmail.com',
		age: 13,
	},
	{
		name: 'slava',
		eyeColor: 'green',
		gender: 'male',
		isActive: true,
		email: 'okayy3@gmail.com',
		age: 18,
	},
	{
		name: 'max',
		eyeColor: 'green',
		gender: 'male',
		isActive: false,
		email: '12boom3@gmail.com',
		age: 10,
	},
]

const names = users.map(user => user.name)
console.log(names)


const colorEye = users.filter(user => user.eyeColor === 'green')
console.log(colorEye)


const checkGender = users.filter(user => user.gender === 'male').map(user => user.name)
console.log(checkGender)


const inActive = users.filter(user => !user.isActive)
console.log(inActive)


const findEmail = users.find(user => user.email === '123@gmail.com')
console.log(findEmail)

const min = 10; 
const max = 14;
const ages = users.filter(user => user.age >= min && user.age <= max)
console.log(ages)