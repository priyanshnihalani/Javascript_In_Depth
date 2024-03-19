// Arrays

const marvel_Heroes = ["Thor", "Ironman", "spiderman"];
const dc_Heroes = ["superman", "flash", "batman"];

// marvel_Heroes.push(dc_Heroes);
// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]);

// let concatenated_array = marvel_Heroes.concat(dc_Heroes)
// console.log(concatenated_array)

// Example of Spread Operator.
const all_Heroes = [...marvel_Heroes, ...dc_Heroes];
console.log(all_Heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
console.log(another_array);

const one_single_another_array = another_array.flat(Infinity);
console.log(one_single_another_array);

console.log(Array.isArray("string"));
console.log(Array.from("String"));
console.log(Array.from({name: "Priyansh"}));
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
