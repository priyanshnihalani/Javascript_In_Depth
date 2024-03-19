// Objects
const user = new Object();
user.name = "abc"
user.isLoggedin = false
// console.log(user)

const regularuser = {
    email: "regular@gmail.com",
    fullname: {
        firstname: "John", 
        lastname: "Doe"
    }
}
// console.log(regularuser.fullname.firstname);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const arrobj = [
    {
        id: 1,
        name: 'Tom'
    },
    {
        id: 2,
        name: 'Jerry'
    }
]
console.log(arrobj[0].name);
console.log(Object.keys(regularuser))
console.log(Object.keys(regularuser.fullname))
console.log(Object.values(regularuser));
console.log(Object.entries(regularuser));

console.log(regularuser.hasOwnProperty("email"));
