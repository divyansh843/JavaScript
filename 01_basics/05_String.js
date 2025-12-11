const name = "Divyansh"
const repo = 50

// console.log(name + repo);

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String("Divyansh")

console.log(gameName[2]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "   Divyansh  "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(newStringOne.replace("a", "aa"));
console.log(newStringOne.includes("ansh"));

const s = "Div-yan-sh"
console.log(s.split("-"));


