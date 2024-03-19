// Normal method to declare String
let name = "abc"

// Declaring String using Objects
let person = new String("ABC");
console.log(person)
console.log(person.__proto__)

console.log(person.charAt(0)) 
console.log(person.indexOf('B'))
console.log(person.length); 

let str = '   Hello, World!   ';
console.log(str.slice(6, 11)); // Output: World
console.log(str.trim()); // Output: Hello, World!

let str1 = 'Hello, World!';

let substr1 = str1.substring(7);
console.log(substr1); //
console.log(str1.charCodeAt(0)); 
console.log(String.fromCharCode(98)); 
console.log(str1.includes(','))
console.log(str1.split(',')); // ['Hello', ' World!']
