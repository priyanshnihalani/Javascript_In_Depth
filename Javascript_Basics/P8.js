// Object literals
const mysym = Symbol("key1")
const mysym1 = Symbol("key2")
const user = {
    name: "abc",
    age: 25,
    mysym1 : "value1",
    [mysym]: "value2",
    city: 'New York',
    "e mail" : "abc@gmail.com"
}
console.log(user.name)
console.log(user["e mail"])
console.log(typeof user.mysym1)
console.log(user[mysym])

user.name = "def"
console.log(user.name)
// Object.freeze(user);
user.age = 19
console.log(user.age)
user.greeting = function () {
    console.log(`Hello JS User, ${this.name}`)
}
console.log(user.greeting())
console.log(user)