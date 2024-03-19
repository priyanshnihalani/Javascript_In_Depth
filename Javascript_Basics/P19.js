const coding = ["js", "java", "c", "cpp", "c#", "python"]

// coding.forEach(function (value) {
//     console.log(value)
// })
// const value = coding.forEach((value) => console.log(value))
// console.log(value)
// For each can also be used with objects
// For each doesn't return any value.

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nums = mynums.filter((num) => num > 4)
console.log(nums);

let numsnew = mynums.map((x) => x * 2)
console.log(numsnew)

let num = mynums.map((x) => x * 10).map((num)  => num + 1)
console.log(num)

// Reduce is a method that takes an array and reduces it to a single value. It uses a callback function where you pass in two parameters
let reduceNum = mynums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log("Sum of numbers: ",  reduceNum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let totalPrice = shoppingCart.reduce((total, currItem) => total + currItem.price , 0)
console.log(`Total Price in the Shopping Cart is ${totalPrice}`)
