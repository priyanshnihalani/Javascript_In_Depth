// function addTwo(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwo(3, 4)

function addTwo(number1, number2) {
    return number1 + number2
}
let result = addTwo(3, 4)
console.log(result)

function userloggedin(userName = "Priyansh") {
    return `User ${userName} has logged in.`
}

console.log(userloggedin())

function calculateCartPrice(...items) {
    return items
}
console.log(calculateCartPrice(20, 30, 20))

const user = { name: "John", age: 30 };
function handleObject(obj) {
    console.log(`Username is ${obj.name} and Price is ${obj.age}.`)
}
// handleObject(user)
handleObject({
    name: "john",
    age: 24
})

const arr = [1, 2, 3];
function handleArray(arr) {
    return `${arr[0]},${arr[1]}`;
}
// console.log(handleArray(arr));
console.log(handleArray([1, 2, 3, 4, 5]));
