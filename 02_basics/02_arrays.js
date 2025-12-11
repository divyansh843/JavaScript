const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)
console.log(marval_heros);
console.log(marval_heros[3][2]);

marval_heros.concat(dc_heros)
const all_heros = marval_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros);

const another_arr = [1, 2, 5, 6, 8, [3, 5, 2], [2, 6, 7, [2, 7]]]
const real_arr = another_arr.flat(Infinity)
console.log(real_arr);

console.log(Array.isArray("Divyansh"));
console.log(Array.from("Divyansh"));
console.log(Array.from({name: "Divyansh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


