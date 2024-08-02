const today = new Date();
console.log(today); 

const specificDate = new Date('2023-12-25');
console.log(specificDate); 

console.log(today.getDate());
console.log(today.getMonth() + 1);
console.log(today.getFullYear()); 

console.log(today.toLocaleDateString()); 
console.log(today.toDateString()); 


const date1 = new Date('2023-12-25');
const date2 = new Date('2024-01-01');
console.log(date1 < date2); 

const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
console.log(diffDays + " days"); 
