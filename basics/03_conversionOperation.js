let score = "60as";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33asd" => NaN not an number
// true => 1; flase => 0

//let isLogin = 1;
let isLogin = "";
// let isLogin = "Divyansh";

let booleanIsLoggedIn = Boolean(isLogin);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false
// "Divyansh" => true

let num = 33;
let numString = String(num);
console.log(numString);
console.log(typeof(numString));
console.log(typeof(num)); // => number

//    <-------Operations--------->

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Divyansh";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;

gameCounter++;
console.log(gameCounter);
