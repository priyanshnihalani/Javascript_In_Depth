const arr = [1, 2, 3, 4, 5];

// for (const iterator of arr) {
//     console.log(iterator);
// }
for (const iterator of "Hello World") {
    console.log(iterator);
}
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

for (const [key, value] of map1) {
    console.log(key + ':' + value);
}       
// [key, value] does destructure of array otherwise output will be showin in array.

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}
// for (const game of myObject) {
//     console.log(game)
// }
// Object is not iteratable with  the for...of loop so we can use for...in loop to iterate over object properties.