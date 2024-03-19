// Arrays
// Two Ways of Declaring arrays
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

// Array in javascript can hold  different types of data like string, number and even objects. unlink programming languages like c, c++, java which holds value of similar types.

// Accessing array elements 
let x = arr[0];
console.log(`Element at index 0 is ${x}`);

// Array Methods
console.log("Length of the array: " + arr.length);
// Push method - Add element to end of an array
arr.push(6);
console.log(arr);

// Pop method - Remove last element from array and return it
let y = arr.pop();
console.log(`Removed element is ${y}`);
console.log(arr);

// Shift method - remove first element of an array and returns it
let z = arr.shift();
console.log(`The removed element using shift() is ${z}`);
console.log(arr);

// Unshift method - add element to beginning of an array
arr.unshift(0);
console.log(arr);

console.log(arr.includes(6))
// IndexOf method - Returns the first occurrence of a value in an array
console.log(`Index of 3 is ${arr.indexOf(3)}`);

// Join Method
const newarr = arr.join()
console.log(`New joined array is ${newarr}`);
console.log(typeof newarr);

const arr3 = [0, 1, 2, 3, 4 ,5];
const myn1 = arr3.slice(1, 3);
console.log(arr3);
console.log(myn1);

const myn2 = arr3.slice(-2); // From second last element till the end
console.log(myn2)
const myn3 = arr3.splice(1, 3);
console.log(arr3);
console.log(myn3);
