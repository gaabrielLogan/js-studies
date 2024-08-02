let numbers = [1, 2, 3, 4, 5]

numbers.forEach(number => console.log(number))

let doubled = numbers.map(number => number * 2)

let even = numbers.filter(number => number % 2 === 0)

let sum = numbers.reduce((total, number) => total + number, 0)
