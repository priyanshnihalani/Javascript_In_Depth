// implicit scope
let x = 10;
if (x == 10) console.log("Yes it is...");

// falsy values
false , 0, -0, BigInt, 0n, "", null, undefined, NaN, false && true || !true;

// truthy values
"0", 'false', " ", [], {}, function(){}
!!"Hello World";
!!{};
!!function(){}();
!!(3 > 2);
!![1, 2];

const object = {}
if(Object.keys(object).length == 0){
    console.log("Empty Object")
}
let val1;
// val1 = 5 ?? 10
val1 = null ??  10
val1 = undefined ?? 10
console.log(val1)