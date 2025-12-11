// Date

const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

const myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());








