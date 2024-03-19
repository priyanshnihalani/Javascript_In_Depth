// Scopes part 2
function one(){
    const username = "Priyansh"
    function two(){
        const website = "youtube"
        console.log(`${username} is using ${website}.`)
    }
    // console.log(website) //Gives error
    two()
}
//two()  // Gives ReferenceError: two is not defined
one()
function addone(num) {
    return num + 1
}
console.log(addone(6))

let addTwo = function(num){
    return  num+2;
}
console.log(addTwo(5))
