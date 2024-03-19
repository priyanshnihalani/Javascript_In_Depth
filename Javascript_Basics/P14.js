const userInfo = {
    user : "Priyansh",
    age: 21,
    gender:"Male",
    welcomeMessage: function(){
        console.log(`${this.user}, welcome to website`)
    }
}
userInfo.welcomeMessage()
userInfo.user = "Hitesh"
userInfo.welcomeMessage()

console.log(this) // {}

// function random() {
//     // let username = "Priyansh"
//     // console.log(this.username)
// }
// random()
// const random = function(){
//         console.log(this)
//     // let username = "Priyansh"
//     //     console.log(this.username)
// }
const random = () => {
    console.log(this)
}
random()