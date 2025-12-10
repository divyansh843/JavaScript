"use strict"; // treat all js code as newer version
// alert("Hello");
// alert(3+3); // we are using nodejs, not browser

console.log(3 
    + 3 );
//code readebility should be high

console.log(3+3);

let name = "Divyansh";
let islogin = false;
let state = null;

//primitive datatype
// number => 2 to power 53
// bigint
// String => " "
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


console.log(typeof("Divyansh"));

console.log(typeof "Divyansh");
console.log(typeof null);
console.log(typeof undefined);

// non-primitive
// object
// arrays

let heros = ["Divyansh", "ironman", "thor"];

let obj = {
    name: "Divyansh",
    age: 21
}

console.log(heros);
console.log(obj);


// stack memory(Primitive) => copy , heap memory(Non-Primitive) => referance of original

let youtube = "Divyansh.youtube"
let youtube2 = youtube;
youtube2 = "Div.youtube";

console.log(youtube);
console.log(youtube2);


let userone = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone;
usertwo.email = "Divyanshgmail.com"

console.log(userone.email);
console.log(usertwo.email);






