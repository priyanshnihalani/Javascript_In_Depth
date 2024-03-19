// ---------------------------Date--------------------------------

const mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());
// console.log(mydate.getFullYear())
// console.log(mydate.getMonth());
// console.log(mydate.getDay());
// console.log(mydate.getTime())
// console.log(mydate.toLocaleString())
// console.log(mydate.toUTCString())

let myCreatedDate = new Date(2024, 2, 10, 14, 26)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString())

let myCreatedTime = Date.now()
console.log(myCreatedTime)
console.log(myCreatedDate.getTime())

console.log(myCreatedTime - myCreatedDate)