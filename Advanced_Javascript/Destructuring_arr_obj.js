// Array Destructuring 

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

const [x, , y] = [10, 20, 30];
console.log(x, y); // Output: 10 30

const [p = 5, q = 10] = [1];
console.log(p, q); // Output: 1 10

const [m, [n, o]] = [40, [50, 60]];
console.log(m, n, o); // Output: 40 50 60

const [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first, rest); // Output: 10 [20, 30, 40, 50]

// Object Destructuring

const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30

const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Output: John 30

const { city = 'New York', country = 'USA' } = { city: 'London' };
console.log(city, country); // Output: London USA

const { address: { cities, countries } } = { address: { city: 'Tokyo', country: 'Japan' } };
console.log(city, country); // Output: Tokyo Japan

function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printPerson({ name: 'Alice', age: 25 }); // Output: Name: Alice, Age: 25