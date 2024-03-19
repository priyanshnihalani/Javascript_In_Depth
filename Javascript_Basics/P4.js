// -------------------------------Numbers-------------------------------------
const score = 400;
console.log(score)

const balance = new Number(100);
console.log(balance)

const value = 4400.997654321;
console.log(value.toFixed(2));

const strScore = 450.34;
console.log(strScore.toPrecision(3)) //Most precise representation of the number

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// -----------------------------Maths-----------------------------------------

console.log(Math) // Math is an Object
console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.4))
console.log(Math.min(4,8,10,-5,15))
console.log(Math.max(3, 4, 32, 20, 324))

console.log(Math.pow(4,2)) // 4 squared
console.log(Math.sqrt(16)) // Square root of 16

let randomNumber = Math.random();
console.log(`Random number between 0 and 1: ${randomNumber}`)

console.log((Math.random() * 100) + 1); // Returns a random integer between 1 and 100 (not inclusive)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

